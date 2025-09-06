const functions = require("firebase-functions");
const admin = require("firebase-admin");
const axios = require("axios");
const cors = require("cors")({ origin: true });

admin.initializeApp();

/**
 * This function is the callback URL for the LinkedIn OAuth flow.
 * 1. It receives an authorization code from LinkedIn.
 * 2. Exchanges that code for an access token.
 * 3. Uses the access token to get the user's LinkedIn profile.
 * 4. Creates a custom Firebase auth token for the user.
 * 5. Redirects the user back to the main website with the custom token.
 */
exports.linkedInAuthCallback = functions.https.onRequest((req, res) => {
  return cors(req, res, async () => {
    try {
      const code = req.query.code;
      if (!code) {
        return res.status(400).send("Authorization code is missing.");
      }

      const linkedInConfig = functions.config().linkedin;
      if (!linkedInConfig || !linkedInConfig.id || !linkedInConfig.secret) {
          throw new Error("LinkedIn API credentials are not configured.");
      }

      const clientId = linkedInConfig.id;
      const clientSecret = linkedInConfig.secret;

      // IMPORTANT: The redirect_uri must EXACTLY match one of the URIs
      // you configured in your LinkedIn Developer App settings.
      const redirectUri = `https://us-central1-tricity-jobs-connect.cloudfunctions.net/linkedInAuthCallback`;

      // 1. Exchange authorization code for access token
      const tokenResponse = await axios.post(
        "https://www.linkedin.com/oauth/v2/accessToken",
        null,
        {
          params: {
            grant_type: "authorization_code",
            code: code,
            redirect_uri: redirectUri,
            client_id: clientId,
            client_secret: clientSecret,
          },
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );

      const accessToken = tokenResponse.data.access_token;

      // 2. Use access token to get user's profile
      const profileResponse = await axios.get("https://api.linkedin.com/v2/me", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const linkedInProfile = profileResponse.data;
      const linkedInUserId = linkedInProfile.id;
      const displayName = `${linkedInProfile.localizedFirstName} ${linkedInProfile.localizedLastName}`;

      // 3. Use access token to get user's primary email address
      const emailResponse = await axios.get(
          "https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))",
          { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      const email = emailResponse.data.elements[0]["handle~"].emailAddress;

      // 4. Create a custom Firebase token
      const firebaseToken = await admin.auth().createCustomToken(linkedInUserId, {
          displayName: displayName,
          email: email,
      });

      // 5. Redirect user back to the main site with the token
      return res.redirect(`https://employnation.in/?linkedin_token=${firebaseToken}`);

    } catch (error) {
      console.error("Error during LinkedIn auth:", error.response ? error.response.data : error.message);
      return res.status(500).send("Authentication failed. Please try again.");
    }
  });
});

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');

const users = require('./routes/api/users');
const auth = require('./routes/auth');

const app = express();

// Passport config
require('./config/passport')(passport);

// Bodyparser middleware
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());

// CORS middleware
app.use(cors());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('MongoDB successfully connected'))
  .catch(err => console.log(err));

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/users', users);
app.use('/auth', auth);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));

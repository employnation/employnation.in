import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  Work,
  Email,
  Phone,
  LocationOn,
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'grey.900',
        color: 'white',
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Work sx={{ mr: 1, fontSize: 28 }} />
              <Typography variant="h5" fontWeight="bold">
                Employ Nation
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
              Your trusted partner in finding the perfect job. We connect talented professionals with leading companies across India.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton color="inherit" size="small">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" size="small">
                <Twitter />
              </IconButton>
              <IconButton color="inherit" size="small">
                <LinkedIn />
              </IconButton>
              <IconButton color="inherit" size="small">
                <Instagram />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              For Job Seekers
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/jobs" color="inherit" underline="hover">
                Browse Jobs
              </Link>
              <Link href="/companies" color="inherit" underline="hover">
                Companies
              </Link>
              <Link href="/register" color="inherit" underline="hover">
                Create Account
              </Link>
              <Link href="/profile" color="inherit" underline="hover">
                My Profile
              </Link>
              <Link href="/dashboard" color="inherit" underline="hover">
                Dashboard
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              For Employers
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/post-job" color="inherit" underline="hover">
                Post a Job
              </Link>
              <Link href="/register" color="inherit" underline="hover">
                Employer Signup
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Pricing
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Resources
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Support
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Company
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" color="inherit" underline="hover">
                About Us
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Careers
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Press
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Blog
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Contact
              </Link>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Email sx={{ fontSize: 16, mr: 1 }} />
                <Typography variant="body2">
                  info@employnation.co.in
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Phone sx={{ fontSize: 16, mr: 1 }} />
                <Typography variant="body2">
                  +91 98765 43210
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <LocationOn sx={{ fontSize: 16, mr: 1, mt: 0.2 }} />
                <Typography variant="body2">
                  Bangalore, Karnataka, India
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, bgcolor: 'grey.700' }} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © 2024 Employ Nation. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link href="#" color="inherit" underline="hover" variant="body2">
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" underline="hover" variant="body2">
              Terms of Service
            </Link>
            <Link href="#" color="inherit" underline="hover" variant="body2">
              Cookie Policy
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
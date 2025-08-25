import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  Paper,
  Avatar,
  Chip,
} from '@mui/material';
import {
  Search,
  LocationOn,
  Work,
  Business,
  TrendingUp,
  People,
  Star,
} from '@mui/icons-material';

const Landing = () => {
  const featuredJobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Tech Corp',
      location: 'Bangalore',
      salary: '₹15-25 LPA',
      type: 'Full-time',
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'StartupXYZ',
      location: 'Mumbai',
      salary: '₹20-30 LPA',
      type: 'Full-time',
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'Design Studio',
      location: 'Delhi',
      salary: '₹8-15 LPA',
      type: 'Full-time',
      logo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    },
  ];

  const topCompanies = [
    { name: 'Google', logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1' },
    { name: 'Microsoft', logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1' },
    { name: 'Amazon', logo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1' },
    { name: 'Flipkart', logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1' },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          py: 8,
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
                Find Your Dream Job
              </Typography>
              <Typography variant="h5" gutterBottom sx={{ opacity: 0.9 }}>
                Discover thousands of job opportunities with all the information you need
              </Typography>
              <Box sx={{ mt: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  component={Link}
                  to="/jobs"
                  sx={{ bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'grey.100' } }}
                >
                  Find Jobs
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  component={Link}
                  to="/post-job"
                  sx={{ borderColor: 'white', color: 'white', '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' } }}
                >
                  Post a Job
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
                <Typography variant="h6" gutterBottom color="text.primary">
                  Search Jobs
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <TextField
                    fullWidth
                    placeholder="Job title, keywords, or company"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Search />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    fullWidth
                    placeholder="City or state"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LocationOn />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Button variant="contained" size="large" fullWidth>
                    Search Jobs
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4} textAlign="center">
          <Grid item xs={12} sm={4}>
            <Box>
              <Work sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h4" fontWeight="bold">10,000+</Typography>
              <Typography variant="h6" color="text.secondary">Active Jobs</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box>
              <Business sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h4" fontWeight="bold">5,000+</Typography>
              <Typography variant="h6" color="text.secondary">Companies</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box>
              <People sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h4" fontWeight="bold">50,000+</Typography>
              <Typography variant="h6" color="text.secondary">Job Seekers</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Featured Jobs */}
      <Box sx={{ bgcolor: 'grey.50', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" textAlign="center" gutterBottom fontWeight="bold">
            Featured Jobs
          </Typography>
          <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
            Discover your next career opportunity
          </Typography>
          <Grid container spacing={3}>
            {featuredJobs.map((job) => (
              <Grid item xs={12} md={4} key={job.id}>
                <Card sx={{ height: '100%', '&:hover': { transform: 'translateY(-4px)', transition: 'transform 0.3s' } }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar src={job.logo} sx={{ mr: 2 }} />
                      <Box>
                        <Typography variant="h6" fontWeight="bold">
                          {job.title}
                        </Typography>
                        <Typography color="text.secondary">
                          {job.company}
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <LocationOn sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
                      <Typography variant="body2" color="text.secondary">
                        {job.location}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                      <Chip label={job.type} size="small" />
                      <Typography variant="h6" color="primary.main" fontWeight="bold">
                        {job.salary}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box textAlign="center" sx={{ mt: 4 }}>
            <Button variant="contained" size="large" component={Link} to="/jobs">
              View All Jobs
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Top Companies */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h4" textAlign="center" gutterBottom fontWeight="bold">
          Top Companies Hiring
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
          Get hired by industry leaders
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {topCompanies.map((company, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <Paper
                elevation={1}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  '&:hover': { elevation: 3, transform: 'translateY(-2px)', transition: 'all 0.3s' }
                }}
              >
                <Avatar
                  src={company.logo}
                  sx={{ width: 60, height: 60, mx: 'auto', mb: 2 }}
                />
                <Typography variant="h6" fontWeight="bold">
                  {company.name}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Box textAlign="center" sx={{ mt: 4 }}>
          <Button variant="outlined" size="large" component={Link} to="/companies">
            View All Companies
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Landing;
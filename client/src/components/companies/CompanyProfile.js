import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Avatar,
  Chip,
  Rating,
  Divider,
  Paper,
  List,
  ListItem,
  ListItemText,
  Tab,
  Tabs,
} from '@mui/material';
import {
  LocationOn,
  Business,
  People,
  Language,
  Work,
  Star,
  ArrowBack,
} from '@mui/icons-material';

const CompanyProfile = () => {
  const { id } = useParams();
  const [company, setCompany] = useState(null);
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Mock company data
  const mockCompany = {
    id: 1,
    name: 'Tech Corp',
    logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    coverImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&dpr=1',
    industry: 'Technology',
    location: 'Bangalore, Karnataka',
    size: '1000-5000 employees',
    rating: 4.5,
    reviews: 234,
    openJobs: 15,
    founded: '2010',
    website: 'https://techcorp.com',
    description: `Tech Corp is a leading technology company specializing in software development and digital solutions. We help businesses transform their operations through innovative technology solutions.

Our mission is to empower organizations with cutting-edge technology that drives growth and efficiency. We believe in creating solutions that not only meet current needs but also anticipate future challenges.

Founded in 2010, we have grown from a small startup to a global technology leader, serving clients across various industries including healthcare, finance, e-commerce, and education.`,
    culture: `At Tech Corp, we foster a culture of innovation, collaboration, and continuous learning. Our team is our greatest asset, and we invest heavily in their growth and development.

We believe in work-life balance and provide flexible working arrangements to help our employees thrive both professionally and personally. Our inclusive environment welcomes diverse perspectives and encourages creative problem-solving.

We organize regular team building activities, hackathons, and learning sessions to keep our team engaged and motivated.`,
    benefits: [
      'Competitive salary and equity packages',
      'Comprehensive health insurance',
      'Flexible working hours and remote work options',
      'Professional development budget',
      'Annual performance bonuses',
      'Paid time off and sabbatical options',
      'Modern office facilities with recreational areas',
      'Free meals and snacks',
      'Gym membership reimbursement',
      'Mental health support programs',
    ],
    jobs: [
      {
        id: 1,
        title: 'Senior Software Engineer',
        department: 'Engineering',
        location: 'Bangalore',
        type: 'Full-time',
        salary: '₹15-25 LPA',
        postedDate: '2 days ago',
      },
      {
        id: 2,
        title: 'Product Manager',
        department: 'Product',
        location: 'Bangalore',
        type: 'Full-time',
        salary: '₹20-30 LPA',
        postedDate: '1 week ago',
      },
      {
        id: 3,
        title: 'UI/UX Designer',
        department: 'Design',
        location: 'Bangalore',
        type: 'Full-time',
        salary: '₹8-15 LPA',
        postedDate: '3 days ago',
      },
    ],
    reviews: [
      {
        id: 1,
        rating: 5,
        title: 'Great place to work',
        review: 'Amazing work culture and great learning opportunities. Management is supportive and the team is collaborative.',
        author: 'Software Engineer',
        date: '2 weeks ago',
      },
      {
        id: 2,
        rating: 4,
        title: 'Good work-life balance',
        review: 'The company provides good work-life balance and flexible working hours. Great benefits and compensation.',
        author: 'Product Manager',
        date: '1 month ago',
      },
      {
        id: 3,
        rating: 4,
        title: 'Innovative environment',
        review: 'Love the innovative environment and the opportunity to work on cutting-edge technologies.',
        author: 'Senior Developer',
        date: '2 months ago',
      },
    ],
  };

  useEffect(() => {
    // In real app, fetch company details from API using the id
    setCompany(mockCompany);
  }, [id]);

  if (!company) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Back Button */}
      <Button
        component={Link}
        to="/companies"
        startIcon={<ArrowBack />}
        sx={{ mb: 3 }}
      >
        Back to Companies
      </Button>

      {/* Company Header */}
      <Card sx={{ mb: 4 }}>
        <Box
          sx={{
            height: 200,
            backgroundImage: `url(${company.coverImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
          }}
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', mt: -6, mb: 3 }}>
            <Avatar
              src={company.logo}
              sx={{
                width: 120,
                height: 120,
                border: '4px solid white',
                mr: 3,
              }}
            />
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                {company.name}
              </Typography>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                {company.industry}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <LocationOn sx={{ fontSize: 18, mr: 0.5, color: 'text.secondary' }} />
                  <Typography variant="body2" color="text.secondary">
                    {company.location}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <People sx={{ fontSize: 18, mr: 0.5, color: 'text.secondary' }} />
                  <Typography variant="body2" color="text.secondary">
                    {company.size}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Business sx={{ fontSize: 18, mr: 0.5, color: 'text.secondary' }} />
                  <Typography variant="body2" color="text.secondary">
                    Founded {company.founded}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Rating value={company.rating} precision={0.1} size="small" readOnly />
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                    {company.rating} ({company.reviews} reviews)
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<Work />}
              >
                View Jobs ({company.openJobs})
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<Language />}
                href={company.website}
                target="_blank"
              >
                Website
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Paper sx={{ mb: 3 }}>
        <Tabs value={tabValue} onChange={handleTabChange} variant="fullWidth">
          <Tab label="About" />
          <Tab label={`Jobs (${company.jobs.length})`} />
          <Tab label={`Reviews (${company.reviews.length})`} />
        </Tabs>
      </Paper>

      {/* Tab Content */}
      {tabValue === 0 && (
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  About {company.name}
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                  {company.description}
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Company Culture
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                  {company.culture}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Benefits & Perks
                </Typography>
                <List dense>
                  {company.benefits.map((benefit, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemText
                        primary={benefit}
                        primaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      {tabValue === 1 && (
        <Card>
          <CardContent>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Open Positions
            </Typography>
            <List>
              {company.jobs.map((job, index) => (
                <React.Fragment key={job.id}>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemText
                      primary={
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography
                            variant="h6"
                            component={Link}
                            to={`/jobs/${job.id}`}
                            sx={{
                              textDecoration: 'none',
                              color: 'inherit',
                              '&:hover': { color: 'primary.main' },
                              fontWeight: 'bold',
                            }}
                          >
                            {job.title}
                          </Typography>
                          <Typography variant="h6" color="primary.main" fontWeight="bold">
                            {job.salary}
                          </Typography>
                        </Box>
                      }
                      secondary={
                        <Box sx={{ mt: 1 }}>
                          <Box sx={{ display: 'flex', gap: 2, mb: 1 }}>
                            <Chip label={job.department} size="small" />
                            <Chip label={job.type} size="small" variant="outlined" />
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <LocationOn sx={{ fontSize: 16, mr: 0.5, color: 'text.secondary' }} />
                              <Typography variant="body2" color="text.secondary">
                                {job.location}
                              </Typography>
                            </Box>
                            <Typography variant="body2" color="text.secondary">
                              Posted {job.postedDate}
                            </Typography>
                          </Box>
                        </Box>
                      }
                    />
                  </ListItem>
                  {index < company.jobs.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </CardContent>
        </Card>
      )}

      {tabValue === 2 && (
        <Card>
          <CardContent>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Employee Reviews
            </Typography>
            <List>
              {company.reviews.map((review, index) => (
                <React.Fragment key={review.id}>
                  <ListItem sx={{ px: 0, alignItems: 'flex-start' }}>
                    <ListItemText
                      primary={
                        <Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Rating value={review.rating} size="small" readOnly />
                            <Typography variant="h6" fontWeight="bold" sx={{ ml: 2 }}>
                              {review.title}
                            </Typography>
                          </Box>
                          <Typography variant="body1" sx={{ mb: 1, lineHeight: 1.6 }}>
                            {review.review}
                          </Typography>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="body2" color="text.secondary">
                              {review.author}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {review.date}
                            </Typography>
                          </Box>
                        </Box>
                      }
                    />
                  </ListItem>
                  {index < company.reviews.length - 1 && <Divider sx={{ my: 2 }} />}
                </React.Fragment>
              ))}
            </List>
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default CompanyProfile;
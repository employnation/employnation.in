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
  Chip,
  Avatar,
  Divider,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  LocationOn,
  Work,
  AttachMoney,
  Schedule,
  Business,
  CheckCircle,
  Share,
  Bookmark,
  BookmarkBorder,
  ArrowBack,
} from '@mui/icons-material';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [isSaved, setIsSaved] = useState(false);

  // Mock job data - in real app, fetch from API
  const mockJob = {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'Tech Corp',
    location: 'Bangalore, Karnataka',
    salary: '₹15-25 LPA',
    type: 'Full-time',
    experience: '3-5 years',
    description: `We are looking for a Senior Software Engineer to join our dynamic team. You will be responsible for designing, developing, and maintaining high-quality software solutions that meet our clients' needs.

As a Senior Software Engineer, you will work closely with cross-functional teams to deliver innovative products and services. You will also mentor junior developers and contribute to architectural decisions.`,
    responsibilities: [
      'Design and develop scalable web applications',
      'Collaborate with product managers and designers',
      'Write clean, maintainable, and efficient code',
      'Conduct code reviews and mentor junior developers',
      'Participate in architectural discussions and decisions',
      'Troubleshoot and debug applications',
      'Stay up-to-date with emerging technologies',
    ],
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '3+ years of experience in software development',
      'Strong proficiency in React, Node.js, and MongoDB',
      'Experience with cloud platforms (AWS, Azure, or GCP)',
      'Knowledge of software development best practices',
      'Excellent problem-solving and communication skills',
      'Experience with Agile development methodologies',
    ],
    skills: ['React', 'Node.js', 'MongoDB', 'AWS', 'JavaScript', 'TypeScript', 'Docker', 'Kubernetes'],
    benefits: [
      'Competitive salary and equity package',
      'Health, dental, and vision insurance',
      'Flexible working hours and remote work options',
      'Professional development opportunities',
      'Annual learning and development budget',
      'Team building activities and company events',
    ],
    logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    postedDate: '2 days ago',
    applicants: 45,
    companySize: '100-500 employees',
    industry: 'Technology',
    website: 'https://techcorp.com',
  };

  useEffect(() => {
    // In real app, fetch job details from API using the id
    setJob(mockJob);
  }, [id]);

  const handleSaveJob = () => {
    setIsSaved(!isSaved);
  };

  const handleApply = () => {
    // Handle job application
    alert('Application submitted successfully!');
  };

  if (!job) {
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
        to="/jobs"
        startIcon={<ArrowBack />}
        sx={{ mb: 3 }}
      >
        Back to Jobs
      </Button>

      <Grid container spacing={4}>
        {/* Main Content */}
        <Grid item xs={12} md={8}>
          <Card elevation={2}>
            <CardContent sx={{ p: 4 }}>
              {/* Job Header */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                <Avatar
                  src={job.logo}
                  sx={{ width: 80, height: 80, mr: 3 }}
                />
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h4" fontWeight="bold" gutterBottom>
                    {job.title}
                  </Typography>
                  <Typography variant="h6" color="primary.main" gutterBottom>
                    {job.company}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <LocationOn sx={{ fontSize: 18, mr: 0.5, color: 'text.secondary' }} />
                      <Typography variant="body2" color="text.secondary">
                        {job.location}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Work sx={{ fontSize: 18, mr: 0.5, color: 'text.secondary' }} />
                      <Typography variant="body2" color="text.secondary">
                        {job.experience}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Schedule sx={{ fontSize: 18, mr: 0.5, color: 'text.secondary' }} />
                      <Typography variant="body2" color="text.secondary">
                        {job.postedDate}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Divider sx={{ my: 3 }} />

              {/* Job Description */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Job Description
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                  {job.description}
                </Typography>
              </Box>

              {/* Responsibilities */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Key Responsibilities
                </Typography>
                <List>
                  {job.responsibilities.map((responsibility, index) => (
                    <ListItem key={index} sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircle color="primary" sx={{ fontSize: 20 }} />
                      </ListItemIcon>
                      <ListItemText primary={responsibility} />
                    </ListItem>
                  ))}
                </List>
              </Box>

              {/* Requirements */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Requirements
                </Typography>
                <List>
                  {job.requirements.map((requirement, index) => (
                    <ListItem key={index} sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircle color="primary" sx={{ fontSize: 20 }} />
                      </ListItemIcon>
                      <ListItemText primary={requirement} />
                    </ListItem>
                  ))}
                </List>
              </Box>

              {/* Skills */}
              <Box sx={{ mb: 4 }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Required Skills
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {job.skills.map((skill, index) => (
                    <Chip key={index} label={skill} variant="outlined" />
                  ))}
                </Box>
              </Box>

              {/* Benefits */}
              <Box>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Benefits & Perks
                </Typography>
                <List>
                  {job.benefits.map((benefit, index) => (
                    <ListItem key={index} sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircle color="success.main" sx={{ fontSize: 20 }} />
                      </ListItemIcon>
                      <ListItemText primary={benefit} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          {/* Apply Card */}
          <Paper elevation={2} sx={{ p: 3, mb: 3, position: 'sticky', top: 20 }}>
            <Box sx={{ textAlign: 'center', mb: 3 }}>
              <Typography variant="h4" color="primary.main" fontWeight="bold" gutterBottom>
                {job.salary}
              </Typography>
              <Chip label={job.type} color="primary" sx={{ mb: 2 }} />
            </Box>

            <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
              <Button
                variant="contained"
                fullWidth
                size="large"
                onClick={handleApply}
              >
                Apply Now
              </Button>
              <Button
                variant="outlined"
                onClick={handleSaveJob}
                sx={{ minWidth: 'auto', px: 2 }}
              >
                {isSaved ? <Bookmark /> : <BookmarkBorder />}
              </Button>
              <Button
                variant="outlined"
                sx={{ minWidth: 'auto', px: 2 }}
              >
                <Share />
              </Button>
            </Box>

            <Typography variant="body2" color="text.secondary" textAlign="center">
              {job.applicants} people have applied for this job
            </Typography>
          </Paper>

          {/* Company Info */}
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              About {job.company}
            </Typography>
            
            <Box sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Business sx={{ fontSize: 18, mr: 1, color: 'text.secondary' }} />
                <Typography variant="body2">
                  {job.industry}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Work sx={{ fontSize: 18, mr: 1, color: 'text.secondary' }} />
                <Typography variant="body2">
                  {job.companySize}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOn sx={{ fontSize: 18, mr: 1, color: 'text.secondary' }} />
                <Typography variant="body2">
                  {job.location}
                </Typography>
              </Box>
            </Box>

            <Button
              variant="outlined"
              fullWidth
              component={Link}
              to={`/companies/${job.id}`}
            >
              View Company Profile
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default JobDetails;
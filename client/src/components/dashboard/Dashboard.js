import React, { useState } from 'react';
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
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Paper,
  Tab,
  Tabs,
} from '@mui/material';
import {
  Work,
  Bookmark,
  Visibility,
  TrendingUp,
  CheckCircle,
  Schedule,
  Cancel,
  Person,
  Email,
  Phone,
} from '@mui/icons-material';

const Dashboard = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+91 98765 43210',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    profileCompletion: 85,
    location: 'Bangalore, Karnataka',
    experience: '5 years',
    skills: ['React', 'Node.js', 'JavaScript', 'Python', 'AWS'],
  };

  const stats = [
    { label: 'Applications Sent', value: 12, icon: <Work />, color: 'primary' },
    { label: 'Saved Jobs', value: 8, icon: <Bookmark />, color: 'secondary' },
    { label: 'Profile Views', value: 45, icon: <Visibility />, color: 'success' },
    { label: 'Interview Calls', value: 3, icon: <TrendingUp />, color: 'warning' },
  ];

  const applications = [
    {
      id: 1,
      jobTitle: 'Senior Software Engineer',
      company: 'Tech Corp',
      appliedDate: '2024-01-15',
      status: 'Under Review',
      statusColor: 'warning',
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
    },
    {
      id: 2,
      jobTitle: 'Product Manager',
      company: 'StartupXYZ',
      appliedDate: '2024-01-12',
      status: 'Interview Scheduled',
      statusColor: 'info',
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
    },
    {
      id: 3,
      jobTitle: 'UI/UX Designer',
      company: 'Design Studio',
      appliedDate: '2024-01-10',
      status: 'Rejected',
      statusColor: 'error',
      logo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&dpr=1',
    },
  ];

  const savedJobs = [
    {
      id: 1,
      title: 'Full Stack Developer',
      company: 'Web Solutions',
      location: 'Mumbai',
      salary: '₹8-15 LPA',
      postedDate: '2 days ago',
    },
    {
      id: 2,
      title: 'Data Scientist',
      company: 'Analytics Pro',
      location: 'Hyderabad',
      salary: '₹12-20 LPA',
      postedDate: '1 week ago',
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Under Review':
        return <Schedule color="warning" />;
      case 'Interview Scheduled':
        return <CheckCircle color="info" />;
      case 'Rejected':
        return <Cancel color="error" />;
      default:
        return <Schedule />;
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Welcome back, {user.name}!
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Left Column */}
        <Grid item xs={12} md={8}>
          {/* Stats Cards */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Box>
                        <Typography variant="h4" fontWeight="bold" color={`${stat.color}.main`}>
                          {stat.value}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {stat.label}
                        </Typography>
                      </Box>
                      <Box sx={{ color: `${stat.color}.main` }}>
                        {stat.icon}
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Tabs */}
          <Paper sx={{ mb: 3 }}>
            <Tabs value={tabValue} onChange={handleTabChange} variant="fullWidth">
              <Tab label="My Applications" />
              <Tab label="Saved Jobs" />
            </Tabs>
          </Paper>

          {/* Tab Content */}
          {tabValue === 0 && (
            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Recent Applications
                </Typography>
                <List>
                  {applications.map((application, index) => (
                    <React.Fragment key={application.id}>
                      <ListItem sx={{ px: 0 }}>
                        <ListItemIcon>
                          <Avatar src={application.logo} sx={{ width: 40, height: 40 }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <Typography variant="subtitle1" fontWeight="bold">
                                {application.jobTitle}
                              </Typography>
                              <Chip
                                label={application.status}
                                color={application.statusColor}
                                size="small"
                                icon={getStatusIcon(application.status)}
                              />
                            </Box>
                          }
                          secondary={
                            <Box>
                              <Typography variant="body2" color="text.secondary">
                                {application.company}
                              </Typography>
                              <Typography variant="caption" color="text.secondary">
                                Applied on {new Date(application.appliedDate).toLocaleDateString()}
                              </Typography>
                            </Box>
                          }
                        />
                      </ListItem>
                      {index < applications.length - 1 && <Divider />}
                    </React.Fragment>
                  ))}
                </List>
              </CardContent>
            </Card>
          )}

          {tabValue === 1 && (
            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Saved Jobs
                </Typography>
                <List>
                  {savedJobs.map((job, index) => (
                    <React.Fragment key={job.id}>
                      <ListItem sx={{ px: 0 }}>
                        <ListItemText
                          primary={
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <Typography variant="subtitle1" fontWeight="bold">
                                {job.title}
                              </Typography>
                              <Typography variant="h6" color="primary.main" fontWeight="bold">
                                {job.salary}
                              </Typography>
                            </Box>
                          }
                          secondary={
                            <Box>
                              <Typography variant="body2" color="text.secondary">
                                {job.company} • {job.location}
                              </Typography>
                              <Typography variant="caption" color="text.secondary">
                                Posted {job.postedDate}
                              </Typography>
                            </Box>
                          }
                        />
                      </ListItem>
                      {index < savedJobs.length - 1 && <Divider />}
                    </React.Fragment>
                  ))}
                </List>
              </CardContent>
            </Card>
          )}
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={4}>
          {/* Profile Card */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Box sx={{ textAlign: 'center', mb: 3 }}>
                <Avatar
                  src={user.avatar}
                  sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }}
                />
                <Typography variant="h6" fontWeight="bold">
                  {user.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user.experience} Experience
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">Profile Completion</Typography>
                  <Typography variant="body2" fontWeight="bold">
                    {user.profileCompletion}%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={user.profileCompletion}
                  sx={{ height: 8, borderRadius: 4 }}
                />
              </Box>

              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Email sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
                  <Typography variant="body2">{user.email}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Phone sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
                  <Typography variant="body2">{user.phone}</Typography>
                </Box>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                  Skills
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {user.skills.map((skill, index) => (
                    <Chip key={index} label={skill} size="small" variant="outlined" />
                  ))}
                </Box>
              </Box>

              <Button variant="contained" fullWidth>
                Edit Profile
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Quick Actions
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Button variant="outlined" fullWidth>
                  Update Resume
                </Button>
                <Button variant="outlined" fullWidth>
                  Job Alerts
                </Button>
                <Button variant="outlined" fullWidth>
                  Interview Tips
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
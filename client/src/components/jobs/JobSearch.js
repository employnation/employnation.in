import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  TextField,
  Button,
  Chip,
  Avatar,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Pagination,
  Paper,
} from '@mui/material';
import {
  Search,
  LocationOn,
  Work,
  FilterList,
  Bookmark,
  BookmarkBorder,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const JobSearch = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [experience, setExperience] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [savedJobs, setSavedJobs] = useState(new Set());
  const jobsPerPage = 9;

  // Mock job data
  const mockJobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Tech Corp',
      location: 'Bangalore',
      salary: '₹15-25 LPA',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'We are looking for a senior software engineer to join our team...',
      skills: ['React', 'Node.js', 'MongoDB'],
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      postedDate: '2 days ago',
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'StartupXYZ',
      location: 'Mumbai',
      salary: '₹20-30 LPA',
      type: 'Full-time',
      experience: '5-8 years',
      description: 'Join our product team to drive innovation...',
      skills: ['Product Strategy', 'Analytics', 'Leadership'],
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      postedDate: '1 day ago',
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'Design Studio',
      location: 'Delhi',
      salary: '₹8-15 LPA',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Create amazing user experiences...',
      skills: ['Figma', 'Adobe XD', 'User Research'],
      logo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      postedDate: '3 days ago',
    },
    {
      id: 4,
      title: 'Data Scientist',
      company: 'Analytics Pro',
      location: 'Hyderabad',
      salary: '₹12-20 LPA',
      type: 'Full-time',
      experience: '2-5 years',
      description: 'Work with big data and machine learning...',
      skills: ['Python', 'Machine Learning', 'SQL'],
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      postedDate: '1 week ago',
    },
    {
      id: 5,
      title: 'Frontend Developer',
      company: 'Web Solutions',
      location: 'Pune',
      salary: '₹6-12 LPA',
      type: 'Full-time',
      experience: '1-3 years',
      description: 'Build responsive web applications...',
      skills: ['React', 'JavaScript', 'CSS'],
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      postedDate: '4 days ago',
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      company: 'Cloud Tech',
      location: 'Chennai',
      salary: '₹10-18 LPA',
      type: 'Full-time',
      experience: '3-6 years',
      description: 'Manage cloud infrastructure and deployments...',
      skills: ['AWS', 'Docker', 'Kubernetes'],
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      postedDate: '5 days ago',
    },
  ];

  useEffect(() => {
    setJobs(mockJobs);
    setFilteredJobs(mockJobs);
  }, []);

  useEffect(() => {
    let filtered = jobs;

    if (searchTerm) {
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (location) {
      filtered = filtered.filter(job =>
        job.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (jobType) {
      filtered = filtered.filter(job => job.type === jobType);
    }

    if (experience) {
      filtered = filtered.filter(job => job.experience === experience);
    }

    setFilteredJobs(filtered);
    setCurrentPage(1);
  }, [searchTerm, location, jobType, experience, jobs]);

  const handleSaveJob = (jobId) => {
    const newSavedJobs = new Set(savedJobs);
    if (newSavedJobs.has(jobId)) {
      newSavedJobs.delete(jobId);
    } else {
      newSavedJobs.add(jobId);
    }
    setSavedJobs(newSavedJobs);
  };

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Search and Filters */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              placeholder="Job title, keywords, or company"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              placeholder="City or state"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOn />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <FormControl fullWidth>
              <InputLabel>Job Type</InputLabel>
              <Select
                value={jobType}
                label="Job Type"
                onChange={(e) => setJobType(e.target.value)}
              >
                <MenuItem value="">All Types</MenuItem>
                <MenuItem value="Full-time">Full-time</MenuItem>
                <MenuItem value="Part-time">Part-time</MenuItem>
                <MenuItem value="Contract">Contract</MenuItem>
                <MenuItem value="Internship">Internship</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={2}>
            <FormControl fullWidth>
              <InputLabel>Experience</InputLabel>
              <Select
                value={experience}
                label="Experience"
                onChange={(e) => setExperience(e.target.value)}
              >
                <MenuItem value="">All Levels</MenuItem>
                <MenuItem value="0-1 years">0-1 years</MenuItem>
                <MenuItem value="1-3 years">1-3 years</MenuItem>
                <MenuItem value="2-4 years">2-4 years</MenuItem>
                <MenuItem value="3-5 years">3-5 years</MenuItem>
                <MenuItem value="5-8 years">5-8 years</MenuItem>
                <MenuItem value="8+ years">8+ years</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={1}>
            <Button
              variant="contained"
              fullWidth
              sx={{ height: 56 }}
              startIcon={<FilterList />}
            >
              Filter
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Results Header */}
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5" fontWeight="bold">
          {filteredJobs.length} Jobs Found
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Showing {indexOfFirstJob + 1}-{Math.min(indexOfLastJob, filteredJobs.length)} of {filteredJobs.length} jobs
        </Typography>
      </Box>

      {/* Job Cards */}
      <Grid container spacing={3}>
        {currentJobs.map((job) => (
          <Grid item xs={12} md={6} lg={4} key={job.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  transition: 'transform 0.3s',
                  boxShadow: 4,
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src={job.logo} sx={{ mr: 2, width: 48, height: 48 }} />
                    <Box>
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
                      <Typography color="text.secondary" variant="body2">
                        {job.company}
                      </Typography>
                    </Box>
                  </Box>
                  <Button
                    onClick={() => handleSaveJob(job.id)}
                    sx={{ minWidth: 'auto', p: 1 }}
                  >
                    {savedJobs.has(job.id) ? <Bookmark color="primary" /> : <BookmarkBorder />}
                  </Button>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <LocationOn sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
                  <Typography variant="body2" color="text.secondary">
                    {job.location}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Work sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
                  <Typography variant="body2" color="text.secondary">
                    {job.experience}
                  </Typography>
                </Box>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {job.description.substring(0, 100)}...
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                  {job.skills.slice(0, 3).map((skill, index) => (
                    <Chip key={index} label={skill} size="small" variant="outlined" />
                  ))}
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
                  <Box>
                    <Typography variant="h6" color="primary.main" fontWeight="bold">
                      {job.salary}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {job.postedDate}
                    </Typography>
                  </Box>
                  <Chip label={job.type} size="small" color="primary" />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      {totalPages > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(event, value) => setCurrentPage(value)}
            color="primary"
            size="large"
          />
        </Box>
      )}
    </Container>
  );
};

export default JobSearch;
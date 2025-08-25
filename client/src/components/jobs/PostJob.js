import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Box,
  InputAdornment,
  Alert,
} from '@mui/material';
import {
  Work,
  LocationOn,
  AttachMoney,
  Business,
  Description,
} from '@mui/icons-material';

const PostJob = () => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    jobType: '',
    experience: '',
    salary: '',
    description: '',
    requirements: '',
    skills: [],
    benefits: '',
    contactEmail: '',
  });
  const [skillInput, setSkillInput] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddSkill = (e) => {
    if (e.key === 'Enter' && skillInput.trim()) {
      e.preventDefault();
      if (!formData.skills.includes(skillInput.trim())) {
        setFormData({
          ...formData,
          skills: [...formData.skills, skillInput.trim()],
        });
      }
      setSkillInput('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter(skill => skill !== skillToRemove),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Job posted:', formData);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    
    // Reset form
    setFormData({
      title: '',
      company: '',
      location: '',
      jobType: '',
      experience: '',
      salary: '',
      description: '',
      requirements: '',
      skills: [],
      benefits: '',
      contactEmail: '',
    });
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={2} sx={{ p: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Work sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Post a Job
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Find the perfect candidate for your team
          </Typography>
        </Box>

        {showSuccess && (
          <Alert severity="success" sx={{ mb: 3 }}>
            Job posted successfully! It will be reviewed and published within 24 hours.
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Job Title */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Job Title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Work />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Company Name */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Company Name"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Business />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Location */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOn />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Job Type */}
            <Grid item xs={12} md={4}>
              <FormControl fullWidth required>
                <InputLabel>Job Type</InputLabel>
                <Select
                  name="jobType"
                  value={formData.jobType}
                  label="Job Type"
                  onChange={handleInputChange}
                >
                  <MenuItem value="Full-time">Full-time</MenuItem>
                  <MenuItem value="Part-time">Part-time</MenuItem>
                  <MenuItem value="Contract">Contract</MenuItem>
                  <MenuItem value="Internship">Internship</MenuItem>
                  <MenuItem value="Remote">Remote</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Experience Level */}
            <Grid item xs={12} md={4}>
              <FormControl fullWidth required>
                <InputLabel>Experience Level</InputLabel>
                <Select
                  name="experience"
                  value={formData.experience}
                  label="Experience Level"
                  onChange={handleInputChange}
                >
                  <MenuItem value="0-1 years">0-1 years</MenuItem>
                  <MenuItem value="1-3 years">1-3 years</MenuItem>
                  <MenuItem value="2-4 years">2-4 years</MenuItem>
                  <MenuItem value="3-5 years">3-5 years</MenuItem>
                  <MenuItem value="5-8 years">5-8 years</MenuItem>
                  <MenuItem value="8+ years">8+ years</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Salary */}
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Salary Range"
                name="salary"
                value={formData.salary}
                onChange={handleInputChange}
                placeholder="e.g., ₹5-10 LPA"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AttachMoney />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Job Description */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Job Description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                multiline
                rows={4}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 1 }}>
                      <Description />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Requirements */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Requirements"
                name="requirements"
                value={formData.requirements}
                onChange={handleInputChange}
                multiline
                rows={3}
                required
                helperText="List the key requirements and qualifications"
              />
            </Grid>

            {/* Skills */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Required Skills"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyPress={handleAddSkill}
                helperText="Press Enter to add skills"
                placeholder="e.g., React, Node.js, Python"
              />
              <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {formData.skills.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    onDelete={() => handleRemoveSkill(skill)}
                    color="primary"
                    variant="outlined"
                  />
                ))}
              </Box>
            </Grid>

            {/* Benefits */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Benefits & Perks"
                name="benefits"
                value={formData.benefits}
                onChange={handleInputChange}
                multiline
                rows={2}
                helperText="Describe the benefits and perks offered"
              />
            </Grid>

            {/* Contact Email */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Contact Email"
                name="contactEmail"
                type="email"
                value={formData.contactEmail}
                onChange={handleInputChange}
                required
                helperText="Applications will be sent to this email"
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Box sx={{ textAlign: 'center', mt: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ px: 6, py: 1.5 }}
                >
                  Post Job
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default PostJob;
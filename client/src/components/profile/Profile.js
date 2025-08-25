import React, { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  TextField,
  Avatar,
  Chip,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
} from '@mui/material';
import {
  Edit,
  Save,
  Cancel,
  Person,
  Work,
  School,
  LocationOn,
  Email,
  Phone,
} from '@mui/icons-material';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+91 98765 43210',
    location: 'Bangalore, Karnataka',
    title: 'Senior Software Engineer',
    experience: '5 years',
    summary: 'Experienced software engineer with expertise in full-stack development. Passionate about creating scalable web applications and leading development teams.',
    skills: ['React', 'Node.js', 'JavaScript', 'Python', 'AWS', 'MongoDB', 'Docker'],
    education: [
      {
        degree: 'Bachelor of Technology',
        field: 'Computer Science',
        institution: 'Indian Institute of Technology',
        year: '2019',
      },
    ],
    workExperience: [
      {
        position: 'Senior Software Engineer',
        company: 'Tech Corp',
        duration: '2021 - Present',
        description: 'Lead development of web applications using React and Node.js. Mentor junior developers and contribute to architectural decisions.',
      },
      {
        position: 'Software Engineer',
        company: 'StartupXYZ',
        duration: '2019 - 2021',
        description: 'Developed and maintained multiple web applications. Worked closely with product team to deliver features.',
      },
    ],
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
  });

  const [editData, setEditData] = useState({ ...profileData });
  const [newSkill, setNewSkill] = useState('');

  const handleEdit = () => {
    setIsEditing(true);
    setEditData({ ...profileData });
  };

  const handleSave = () => {
    setProfileData({ ...editData });
    setIsEditing(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditData({ ...profileData });
  };

  const handleInputChange = (field, value) => {
    setEditData({ ...editData, [field]: value });
  };

  const handleAddSkill = () => {
    if (newSkill.trim() && !editData.skills.includes(newSkill.trim())) {
      setEditData({
        ...editData,
        skills: [...editData.skills, newSkill.trim()],
      });
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setEditData({
      ...editData,
      skills: editData.skills.filter(skill => skill !== skillToRemove),
    });
  };

  const currentData = isEditing ? editData : profileData;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {showSuccess && (
        <Alert severity="success" sx={{ mb: 3 }}>
          Profile updated successfully!
        </Alert>
      )}

      <Grid container spacing={4}>
        {/* Left Column - Profile Info */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Avatar
                src={currentData.avatar}
                sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }}
              />
              
              {isEditing ? (
                <TextField
                  fullWidth
                  value={editData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  sx={{ mb: 2 }}
                />
              ) : (
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {currentData.name}
                </Typography>
              )}

              {isEditing ? (
                <TextField
                  fullWidth
                  value={editData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  sx={{ mb: 2 }}
                />
              ) : (
                <Typography variant="h6" color="primary.main" gutterBottom>
                  {currentData.title}
                </Typography>
              )}

              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                <LocationOn sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
                {isEditing ? (
                  <TextField
                    size="small"
                    value={editData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                  />
                ) : (
                  <Typography variant="body2" color="text.secondary">
                    {currentData.location}
                  </Typography>
                )}
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                <Work sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
                {isEditing ? (
                  <FormControl size="small" sx={{ minWidth: 120 }}>
                    <Select
                      value={editData.experience}
                      onChange={(e) => handleInputChange('experience', e.target.value)}
                    >
                      <MenuItem value="0-1 years">0-1 years</MenuItem>
                      <MenuItem value="1-3 years">1-3 years</MenuItem>
                      <MenuItem value="3-5 years">3-5 years</MenuItem>
                      <MenuItem value="5+ years">5+ years</MenuItem>
                    </Select>
                  </FormControl>
                ) : (
                  <Typography variant="body2" color="text.secondary">
                    {currentData.experience} experience
                  </Typography>
                )}
              </Box>

              <Divider sx={{ my: 2 }} />

              <Box sx={{ textAlign: 'left' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Email sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
                  {isEditing ? (
                    <TextField
                      size="small"
                      fullWidth
                      value={editData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  ) : (
                    <Typography variant="body2">{currentData.email}</Typography>
                  )}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Phone sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
                  {isEditing ? (
                    <TextField
                      size="small"
                      fullWidth
                      value={editData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  ) : (
                    <Typography variant="body2">{currentData.phone}</Typography>
                  )}
                </Box>
              </Box>

              {isEditing ? (
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button
                    variant="contained"
                    startIcon={<Save />}
                    onClick={handleSave}
                    fullWidth
                  >
                    Save
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<Cancel />}
                    onClick={handleCancel}
                    fullWidth
                  >
                    Cancel
                  </Button>
                </Box>
              ) : (
                <Button
                  variant="contained"
                  startIcon={<Edit />}
                  onClick={handleEdit}
                  fullWidth
                >
                  Edit Profile
                </Button>
              )}
            </CardContent>
          </Card>
        </Grid>

        {/* Right Column - Detailed Info */}
        <Grid item xs={12} md={8}>
          {/* Summary */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Professional Summary
              </Typography>
              {isEditing ? (
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  value={editData.summary}
                  onChange={(e) => handleInputChange('summary', e.target.value)}
                />
              ) : (
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  {currentData.summary}
                </Typography>
              )}
            </CardContent>
          </Card>

          {/* Skills */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Skills
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                {currentData.skills.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    onDelete={isEditing ? () => handleRemoveSkill(skill) : undefined}
                    color="primary"
                    variant="outlined"
                  />
                ))}
              </Box>
              {isEditing && (
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <TextField
                    size="small"
                    placeholder="Add new skill"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
                  />
                  <Button variant="outlined" onClick={handleAddSkill}>
                    Add
                  </Button>
                </Box>
              )}
            </CardContent>
          </Card>

          {/* Work Experience */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Work Experience
              </Typography>
              {currentData.workExperience.map((exp, index) => (
                <Box key={index} sx={{ mb: index < currentData.workExperience.length - 1 ? 3 : 0 }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {exp.position}
                  </Typography>
                  <Typography variant="subtitle2" color="primary.main">
                    {exp.company}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {exp.duration}
                  </Typography>
                  <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                    {exp.description}
                  </Typography>
                  {index < currentData.workExperience.length - 1 && <Divider sx={{ mt: 2 }} />}
                </Box>
              ))}
            </CardContent>
          </Card>

          {/* Education */}
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Education
              </Typography>
              {currentData.education.map((edu, index) => (
                <Box key={index}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {edu.degree} in {edu.field}
                  </Typography>
                  <Typography variant="subtitle2" color="primary.main">
                    {edu.institution}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Graduated: {edu.year}
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
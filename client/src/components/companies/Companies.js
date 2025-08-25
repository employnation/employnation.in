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
  Avatar,
  InputAdornment,
  Chip,
  Rating,
  Pagination,
  Paper,
} from '@mui/material';
import {
  Search,
  LocationOn,
  Business,
  People,
  Star,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const companiesPerPage = 12;

  // Mock companies data
  const mockCompanies = [
    {
      id: 1,
      name: 'Tech Corp',
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      industry: 'Technology',
      location: 'Bangalore, Karnataka',
      size: '1000-5000 employees',
      rating: 4.5,
      reviews: 234,
      openJobs: 15,
      description: 'Leading technology company specializing in software development and digital solutions.',
      founded: '2010',
      website: 'https://techcorp.com',
    },
    {
      id: 2,
      name: 'StartupXYZ',
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      industry: 'E-commerce',
      location: 'Mumbai, Maharashtra',
      size: '100-500 employees',
      rating: 4.2,
      reviews: 89,
      openJobs: 8,
      description: 'Fast-growing e-commerce startup revolutionizing online shopping experience.',
      founded: '2018',
      website: 'https://startupxyz.com',
    },
    {
      id: 3,
      name: 'Design Studio',
      logo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      industry: 'Design',
      location: 'Delhi, NCR',
      size: '50-100 employees',
      rating: 4.7,
      reviews: 156,
      openJobs: 5,
      description: 'Creative design agency helping brands create amazing user experiences.',
      founded: '2015',
      website: 'https://designstudio.com',
    },
    {
      id: 4,
      name: 'Analytics Pro',
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      industry: 'Data Analytics',
      location: 'Hyderabad, Telangana',
      size: '500-1000 employees',
      rating: 4.3,
      reviews: 178,
      openJobs: 12,
      description: 'Data analytics company providing insights and business intelligence solutions.',
      founded: '2012',
      website: 'https://analyticspro.com',
    },
    {
      id: 5,
      name: 'Web Solutions',
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      industry: 'Web Development',
      location: 'Pune, Maharashtra',
      size: '200-500 employees',
      rating: 4.1,
      reviews: 92,
      openJobs: 7,
      description: 'Full-service web development company creating modern web applications.',
      founded: '2014',
      website: 'https://websolutions.com',
    },
    {
      id: 6,
      name: 'Cloud Tech',
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      industry: 'Cloud Computing',
      location: 'Chennai, Tamil Nadu',
      size: '1000+ employees',
      rating: 4.4,
      reviews: 267,
      openJobs: 20,
      description: 'Cloud infrastructure and services provider helping businesses scale.',
      founded: '2008',
      website: 'https://cloudtech.com',
    },
  ];

  useEffect(() => {
    setCompanies(mockCompanies);
    setFilteredCompanies(mockCompanies);
  }, []);

  useEffect(() => {
    let filtered = companies;

    if (searchTerm) {
      filtered = filtered.filter(company =>
        company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredCompanies(filtered);
    setCurrentPage(1);
  }, [searchTerm, companies]);

  const indexOfLastCompany = currentPage * companiesPerPage;
  const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
  const currentCompanies = filteredCompanies.slice(indexOfFirstCompany, indexOfLastCompany);
  const totalPages = Math.ceil(filteredCompanies.length / companiesPerPage);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Top Companies
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Discover amazing companies and find your next opportunity
        </Typography>
      </Box>

      {/* Search */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={8}>
            <TextField
              fullWidth
              placeholder="Search companies by name, industry, or location"
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
          <Grid item xs={12} md={4}>
            <Button
              variant="contained"
              fullWidth
              sx={{ height: 56 }}
              startIcon={<Search />}
            >
              Search Companies
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Results Header */}
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5" fontWeight="bold">
          {filteredCompanies.length} Companies Found
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Showing {indexOfFirstCompany + 1}-{Math.min(indexOfLastCompany, filteredCompanies.length)} of {filteredCompanies.length} companies
        </Typography>
      </Box>

      {/* Company Cards */}
      <Grid container spacing={3}>
        {currentCompanies.map((company) => (
          <Grid item xs={12} sm={6} md={4} key={company.id}>
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
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                  <Avatar
                    src={company.logo}
                    sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }}
                  />
                  <Typography
                    variant="h6"
                    component={Link}
                    to={`/companies/${company.id}`}
                    sx={{
                      textDecoration: 'none',
                      color: 'inherit',
                      '&:hover': { color: 'primary.main' },
                      fontWeight: 'bold',
                    }}
                  >
                    {company.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {company.industry}
                  </Typography>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <LocationOn sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      {company.location}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <People sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      {company.size}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Business sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      Founded {company.founded}
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
                  {company.description}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Rating value={company.rating} precision={0.1} size="small" readOnly />
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                      {company.rating} ({company.reviews})
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
                  <Chip
                    label={`${company.openJobs} Open Jobs`}
                    color="primary"
                    size="small"
                  />
                  <Button
                    component={Link}
                    to={`/companies/${company.id}`}
                    variant="outlined"
                    size="small"
                  >
                    View Details
                  </Button>
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

export default Companies;
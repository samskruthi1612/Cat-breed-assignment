import { useLocation } from 'react-router-dom';
import { Box, Typography, Card, CardMedia, Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Breed {
  name: string;
  description: string;
  temperament: string;
  origin: string;
}

interface SelectedCat {
  url: string;
  breeds?: Breed[];
}

const About: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedCat } = location.state as { selectedCat?: SelectedCat } || {};

  if (!selectedCat) {
    return <div>No cat selected for adoption.</div>;
  }

  return (
    <Box sx={{ display: 'flex', padding: '16px',mt:'2rem', justifyContent: 'space-evenly' }}>
      <Card sx={{ width: 'auto', marginRight: '16px' }}>
        <CardMedia
          component="img"
          height="400"
          image={selectedCat.url}
          alt={selectedCat.breeds && selectedCat.breeds.length > 0 ? selectedCat.breeds[0].name : 'Unknown breed'}
        />
      </Card>
      
      <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Typography variant="h3">
          {selectedCat.breeds && selectedCat.breeds.length > 0 ? selectedCat.breeds[0].name : 'Unknown breed'}
        </Typography>

        <Typography variant="body1"sx={{marginTop:'1rem'}} >
          {selectedCat.breeds && selectedCat.breeds.length > 0 ? selectedCat.breeds[0].description : 'No description available'}
        </Typography>
        
        <Box sx={{ mt: 2 }}>
          <Typography variant="h5">Temperament:</Typography>
          <Typography variant="body1">
            {selectedCat.breeds && selectedCat.breeds.length > 0 ? selectedCat.breeds[0].temperament : 'No temperament available'}
          </Typography>
        </Box>
        
        <Box sx={{ mt: 2 }}>
          <Typography variant="h5">Origin:</Typography>
          <Typography variant="body1">
            {selectedCat.breeds && selectedCat.breeds.length > 0 ? selectedCat.breeds[0].origin : 'No origin available'}
          </Typography>
        </Box>
        
        <Box sx={{ mt: 2 }}>
          <Button 
            variant="contained" 
            sx={{
              width: '100px',
              padding: '10px 50px'
            }}
            color="primary" 
            onClick={() => navigate('/goodbye')}
          >
            Buy
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
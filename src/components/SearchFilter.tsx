import { TextField, Box } from "@mui/material";
import React from 'react';

interface SearchFilterProps {
  searchQuery: string; 
  setSearchQuery: (value: string) => void; 
}

const SearchFilter: React.FC<SearchFilterProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <Box sx={{ marginBottom: '16px', width: '250px', marginLeft: '61rem' }}>
      <TextField
        label="Search by Breed"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& input': {
              padding: '12px', 
            },
          }
        }}
      />
    </Box>
  );
};

export default SearchFilter;

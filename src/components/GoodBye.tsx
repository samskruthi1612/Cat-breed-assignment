import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const GoodBye: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "85vh",
      }}
    >
      <Typography variant="h3">Yay! You've bought the cat</Typography>
      <Typography variant="h3">We'll get back to you soon!</Typography>
      <Button
        variant="contained"
        sx={{ mt: "1rem", color: "text.main" }}
        onClick={() => {
          navigate("/");
        }}
      >
        Back to home
      </Button>
    </Box>
  );
};
export default GoodBye;

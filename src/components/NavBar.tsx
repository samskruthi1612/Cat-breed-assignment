import React from "react";
import AppBar from "@mui/material/AppBar";
import { Typography, Toolbar, Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  button: {
    marginLeft: "2rem",
  },
}));

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography variant="h4" sx={{ color: "text.main" }}>
            Cat World
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button sx={{ color: "text.main" }} onClick={() => navigate("/")}>
            Home
          </Button>
          <Button
            sx={{ color: "text.main" }}
            onClick={() => navigate("/about")}
          >
            About
          </Button>
          <Button
            sx={{ color: "text.main" }}
            onClick={() => navigate("/contact")}
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

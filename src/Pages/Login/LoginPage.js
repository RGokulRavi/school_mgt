import React from "react";
import "./styles.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const LoginPage = () => {
  return (
    <div className="LoginPage">
      <React.Fragment>
        <CssBaseline />
        <Container>
          <Box className="LoginContainer">
            <div className="LoginHeader">
              <Typography variant="h6" color="initial">
                Login in
              </Typography>
            </div>

            <div className="LoginTextFieldContainer">
              <TextField
                id="outlined-basic"
                label="User Name"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
            </div>
            <Button variant="contained">Sign in</Button>
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default LoginPage;

// sx={{ bgcolor: "#cfe8fc", height: "100vh" }}

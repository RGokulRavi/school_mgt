import React from "react";
import "./styles.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { CheckBox } from "@mui/icons-material";

const LoginPage = () => {
  return (
    <div className="LoginPage">
      <React.Fragment>
        <CssBaseline />
        <Container className="LoginContainer">
          <Box className="LoginBox">
            <div className="LoginTitle">
              <Typography
                className="LoginTitleName"
                sx={{ fontWeight: 600 }}
                variant="h6"
              >
                Welcome to School
              </Typography>
              <div className="LoginSubTitle">
                <Typography sx={{ fontSize: 14, color: "#AAAAAA" }}>
                  Need an account?
                </Typography>
                <Typography
                  sx={{ color: "#18aefa", fontSize: 14, marginBottom: 2 }}
                >
                  Sign up
                </Typography>
              </div>
            </div>
            <div className="LoginHeader">
              <Typography
                className="LoginHead"
                sx={{ fontWeight: 550, marginBottom: 1 }}
              >
                Sign in
              </Typography>
            </div>

            <div className="LoginTextFieldContainer">
              <TextField
                id="outlined-basic"
                label="User Name"
                variant="outlined"
                // sx={{ minWidth: 340 }}
              />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                // sx={{ minWidth: 340 }}
              />
            </div>
            <div className="CheckBoxAndForgetPassword">
              <div className="RememberMe"></div>
              <CheckBox />
              <Typography>Remember me</Typography>

              <Typography sx={{ color: "#18aefa" }}>
                Forgot Password?
              </Typography>
            </div>
            <div className="LoginButton">
              <Button variant="contained">Sign in</Button>
            </div>
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default LoginPage;

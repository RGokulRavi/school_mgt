import React from "react";
import "./styles.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import { Card, Link } from "@mui/material";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 3,
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#137cbd",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
});

function BpCheckbox(props) {
  return (
    <Checkbox
      sx={{
        "&:hover": { bgcolor: "transparent" },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ "aria-label": "Checkbox demo" }}
      {...props}
    />
  );
}

const StyledTypography = styled(Typography)(({ theme }) => ({
  "&:hover": {
    textDecoration: "underline",
  },
  label: {
    fontWeight: "bold",
    fontSize: "14px",
    color: "#333",
    marginBottom: "8px",
  },
}));

const LoginPage = () => {
  return (
    <div className="LoginPage">
      <div className="loginPageSchoolLogoDiv">
        <img
          className="loginPageSchoolLogo"
          src="https://img.freepik.com/free-vector/gradient-high-school-logo-design_23-2149626932.jpg"
        />
      </div>

      <React.Fragment>
        <CssBaseline />
        <Card className="LoginContainer">
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
              <StyledTypography
                sx={{
                  color: "#1976F4",
                  fontSize: 14,
                  marginBottom: 2,
                  marginLeft: 0.2,
                  cursor: "pointer",
                }}
              >
                Sign up
              </StyledTypography>
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
              label="User Name*"
              variant="outlined"
              size="small"
              sx={{
                minWidth: 320,
                label: {
                  fontSize: 14,
                  marginBottom: 8,
                },
              }}
            />
            <TextField
              id="outlined-basic"
              label="Password*"
              variant="outlined"
              size="small"
              sx={{
                minWidth: 320,
                label: {
                  fontSize: 14,
                  marginBottom: 8,
                },
              }}
            />
          </div>
          <div className="CheckBoxAndForgetPassword">
            <div className="RememberMe">
              <BpCheckbox sx={{ color: "#16062A" }} defaultChecked />
              <Typography sx={{ fontSize: 13 }}>Remember me</Typography>
            </div>

            <StyledTypography
              sx={{ color: "#1976F4", cursor: "pointer", fontSize: 13 }}
            >
              Forgot Password?
            </StyledTypography>
          </div>
          <div className="LoginButton">
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                width: "100%",
                backgroundColor: "#16062A",
              }}
            >
              Sign in
            </Button>
          </div>
        </Card>
      </React.Fragment>
    </div>
  );
};

export default LoginPage;

import React from "react";
import "./styles.css";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ClassIcon from "@mui/icons-material/Class";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

const StudentDetails = () => {
  return (
    <>
      <div className="StudentDetails">
        <Card sx={{ maxWidth: 800 }}>
          <div className="StudentDetailsCardHead">
            <CardMedia
              className="StudentDetailsStudentLogoDiv"
              component="img"
              sx={{
                display: "flex",
                width: 100,
                height: 100,
                borderRadius: "100px",
                objectFit: "cover",
                position: "relative",
                padding: 0.5,
                backgroundColor: "white",
              }}
              image="data:image/jpeg;base64,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"
              alt="Paella dish"
            />
          </div>

          <div className="StudentDetailsStudentLogoDiv"></div>
          {/* <CardMedia
          className="StudentDetailsStudentLogoDiv"
          component="img"
          sx={{
            display: "flex",
            width: 100,
            height: 100,
            borderRadius: "100px",
            objectFit: "cover",
            position: "relative",
            padding: 0.5,
            backgroundColor: "white",
          }}
          image="data:image/jpeg;base64,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"
          alt="Paella dish"
        /> */}
          <CardContent className="StudentDetailsCardContant">
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={4} className="StudentDetailsCardContantDiv">
                <IconButton sx={{ backgroundColor: "secondary.light" }}>
                  <PersonIcon />
                </IconButton>
                <div className="StudentDetailsCardContantSubDiv">
                  <Typography sx={{ opacity: "50%" }}>Parents:</Typography>
                  <Typography>Kavin</Typography>
                </div>
              </Grid>
              <Grid item xs={4} className="StudentDetailsCardContantDiv">
                <IconButton sx={{ backgroundColor: "secondary.light" }}>
                  <LocationOnIcon />
                </IconButton>
                <div className="StudentDetailsCardContantSubDiv">
                  <Typography sx={{ opacity: "50%" }}>Address:</Typography>
                  <Typography>Palavandhangal, Chennai</Typography>
                </div>
              </Grid>
              <Grid item xs={4} className="StudentDetailsCardContantDiv">
                <IconButton sx={{ backgroundColor: "secondary.light" }}>
                  <PhoneIcon />
                </IconButton>
                <div className="StudentDetailsCardContantSubDiv">
                  <Typography sx={{ opacity: "50%" }}>Phone:</Typography>
                  <Typography>789456123</Typography>
                </div>
              </Grid>
              <Grid item xs={4} className="StudentDetailsCardContantDiv">
                <IconButton sx={{ backgroundColor: "secondary.light" }}>
                  <EmailIcon />
                </IconButton>
                <div className="StudentDetailsCardContantSubDiv">
                  <Typography sx={{ opacity: "50%" }}>Email Id:</Typography>
                  <Typography>Kavin@gmail.com</Typography>
                </div>
              </Grid>
              <Grid item xs={4} className="StudentDetailsCardContantDiv">
                <IconButton sx={{ backgroundColor: "secondary.light" }}>
                  <PhoneIcon />
                </IconButton>
                <div className="StudentDetailsCardContantSubDiv">
                  <Typography sx={{ opacity: "50%" }}>Phone:</Typography>
                  <Typography>789456123</Typography>
                </div>
              </Grid>
              <Grid item xs={4} className="StudentDetailsCardContantDiv">
                <IconButton sx={{ backgroundColor: "secondary.light" }}>
                  <EmailIcon />
                </IconButton>
                <div className="StudentDetailsCardContantSubDiv">
                  <Typography sx={{ opacity: "50%" }}>Email Id:</Typography>
                  <Typography>Kavin@gmail.com</Typography>
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default StudentDetails;

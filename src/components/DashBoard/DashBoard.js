import React from "react";
import "./styles.css";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const DashBoard = () => {
  return (
    <div className="DashBoard">
      <div className="smallCards">
        <Card>
          <CardContent sx={{ textAlign: "left" }}>
            <Typography>Students</Typography>
            <Typography>5054</Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 50 }}
            image="/static/images/cards/live-from-space.jpg"
            alt="Live from space album cover"
          />
        </Card>
      </div>
    </div>
  );
};

export default DashBoard;

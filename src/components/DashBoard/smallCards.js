import React from "react";
import "./styles.css";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import {
  dashboardSmallCardAchievementsLogo,
  dashboardSmallCardRevenueLogo,
  dashboardSmallCardStudentsLogo,
  dashboardSmallCardTeachersLogo,
  dashboardSmallCardsData,
} from "../../Global";

const smallCards = () => {
  return (
    <div className="smallCardsDiv">
      {/* {dashboardSmallCardsData.map((data)=>)} */}
      <Card className="smallCards">
        <CardContent sx={{ textAlign: "left" }}>
          <Typography fontSize={12}>Students</Typography>
          <Typography>5054</Typography>
        </CardContent>
        <CardMedia
          className="smallCardsImage"
          component="img"
          image={dashboardSmallCardStudentsLogo}
        />
      </Card>
      <Card className="smallCards">
        <CardContent sx={{ textAlign: "left" }}>
          <Typography fontSize={12}>Teachers</Typography>
          <Typography>2300</Typography>
        </CardContent>
        <CardMedia
          className="smallCardsImage"
          component="img"
          image={dashboardSmallCardTeachersLogo}
        />
      </Card>
      <Card className="smallCards">
        <CardContent sx={{ textAlign: "left" }}>
          <Typography fontSize={12}>Acheivements</Typography>
          <Typography>58</Typography>
        </CardContent>
        <CardMedia
          className="smallCardsImage"
          component="img"
          image={dashboardSmallCardAchievementsLogo}
        />
      </Card>
      <Card className="smallCards">
        <CardContent sx={{ textAlign: "left" }}>
          <Typography fontSize={12} sx={{ paddingLeft: 1 }}>
            Revenue
          </Typography>
          <Typography>💲32,058</Typography>
        </CardContent>
        <CardMedia
          className="smallCardsImage"
          component="img"
          image={dashboardSmallCardRevenueLogo}
        />
      </Card>
    </div>
  );
};

export default smallCards;

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
import CountUp from "react-countup";

const smallCards = () => {
  return (
    <div className="smallCardsDiv">
      {/* {dashboardSmallCardsData.map((data)=>)} */}
      <Card className="smallCards">
        <CardContent sx={{ textAlign: "left" }}>
          <Typography fontSize={12}>Students</Typography>
          <Typography>
            <CountUp end={5024} />
          </Typography>
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
          <Typography>
            <CountUp end={2300} />
          </Typography>
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
          <Typography>
            {" "}
            <CountUp end={58} />
          </Typography>
        </CardContent>
        <CardMedia
          className="smallCardsImage"
          component="img"
          image={dashboardSmallCardAchievementsLogo}
        />
      </Card>
      <Card className="smallCards">
        <CardContent sx={{ textAlign: "left" }}>
          <Typography fontSize={12} sx={{ paddingRight: 5, paddingLeft: 1 }}>
            Revenue
          </Typography>
          <Typography>
            💲 <CountUp end={32056} />
          </Typography>
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

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { MastersData } from "../../../Global";
import { Typography } from "@mui/material";
import StateMaster from "./StateMaster";
import CityMaster from "./CityMaster";

export default function MasterSubRoutes({ type }) {
  //   const [typename, setTypeName] = useState(e);
  let componentToRender;
  if (type) {
    switch (type) {
      case "State Master":
        componentToRender = <StateMaster />;
        break;
      case "City Master":
        componentToRender = <CityMaster />;
        break;
    }
  }
  return (
    <div className="MasterSubRoutesDiv">
      {console.log(type)}
      <Typography>{type}</Typography>
      <Typography>{type}</Typography>
      {componentToRender}
    </div>
  );
}

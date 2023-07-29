import React from "react";
import "./styles.css";
import smallCards from "./smallCards";
import splineChart from "./splineChart";

const DashBoard = () => {
  return (
    <div className="DashBoard">
      {smallCards()}
      {/* {splineChart()} */}
    </div>
  );
};

export default DashBoard;

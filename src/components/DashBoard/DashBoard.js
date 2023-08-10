import React from "react";
import "./styles.css";
import smallCards from "./smallCards";
import splineChart from "./splineChart";
import Charts from "./charts";

const DashBoard = () => {
  return (
    <div className="DashBoard">
      {smallCards()}
      <Charts />

      {/* {splineChart()} */}
    </div>
  );
};

export default DashBoard;

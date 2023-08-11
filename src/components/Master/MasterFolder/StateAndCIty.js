import React from "react";
import "../styles.css";
import StateMaster from "./StateMaster";
import CityMaster from "./CityMaster";

const StateAndCIty = () => {
  return (
    <div className="StateAndCity">
      <StateMaster />
      <CityMaster />
    </div>
  );
};

export default StateAndCIty;

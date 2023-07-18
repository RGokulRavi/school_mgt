import React from "react";
import MiniDrawer from "../../components/DashBoard/minidrawer";
import Typography from "@mui/material/Typography";
import ResponsiveAppBar from "../../components/DashBoard/navBar";
import LeftMainBar from "../../components/DashBoard/LeftMainBar";

const DashBoardPage = () => {
  return (
    <div className="DashBoardPage">
      <MiniDrawer />
      {/* <ResponsiveAppBar /> */}
      {/* <LeftMainBar /> */}
    </div>
  );
};

export default DashBoardPage;

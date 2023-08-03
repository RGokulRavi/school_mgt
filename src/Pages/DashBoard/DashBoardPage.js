import React from "react";
import MiniDrawer from "../../components/DashBoard/minidrawer";

const DashBoardPage = ({ setMode, mode }) => {
  return (
    <div className="DashBoardPage">
      <MiniDrawer setMode={setMode} mode={mode} />
    </div>
  );
};

export default DashBoardPage;

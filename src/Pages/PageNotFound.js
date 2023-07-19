import React from "react";
import notFoundImage from "../Image/404.gif";

const PageNotFound = () => {
  return (
    <div className="PageNotFound">
      <img src={notFoundImage}></img>
    </div>
  );
};

export default PageNotFound;

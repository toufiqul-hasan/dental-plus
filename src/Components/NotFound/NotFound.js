import React from "react";
import error404 from "../../Assets/Images/error404.png";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="mb-5">
        <img src={error404} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
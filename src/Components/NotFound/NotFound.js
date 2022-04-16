import React from 'react';
import error404 from "../../Assets/Images/error404.png";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className='container'>
      <img src={error404} alt="" />
    </div>
  );
};

export default NotFound;
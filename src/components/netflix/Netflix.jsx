import React from "react";
import "./style.css";
import { API } from "../../config/constants";

const Netflix = () => {
  return (
    <div className="d-flex justify-content-center align-items-center fullContainer">
      <img
        src={API.netflixImage}
        width="50%"
        alt="netflix"
        className="bg-transparent"
      />
    </div>
  );
};

export default Netflix;

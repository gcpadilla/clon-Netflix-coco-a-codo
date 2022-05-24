import React from "react";
import "./style.css";

const Loading = ({color}) => {
  return (
    <div className="d-flex justify-content-center align-items-center fullContainer">
      <div className={`spinner-border ${color}`} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;

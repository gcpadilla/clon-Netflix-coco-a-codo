import React from "react";
import "./style.css";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center fullW">
      <div className="me-2">Loading...</div>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;

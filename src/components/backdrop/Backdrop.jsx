import React from "react";
import "../slider/slider.css";

const Backdrop = ({ backdrop }) => {
  return (
    <>
      <div
        className="degradadoF mx-1"
        style={{
          height: "150px",
          background: `linear-gradient(rgb(255 255 255 / 0%),rgba(0, 0, 0, 0.780)), url(${backdrop})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      />
    </>
  );
};

export default Backdrop;

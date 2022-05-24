import React from "react";
import "../slider/slider.css";

const Poster = ({poster}) => {
  return (
    <>
      <div
        className="degradadoF mx-1"
        style={{
          height: "320px",
          background: `url(${poster})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      />
    </>
  );
};

export default Poster;

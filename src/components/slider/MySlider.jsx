import React, { useEffect } from "react";
import Slider from "react-slick";
import { settings } from "./sliderSeting";
import "./slider.css";
import { API } from "../../config/constants";
import useFetch from "../../hooks/useFetch";

const MySlider = ({ entity, titulo, poster }) => {
  const { data, loading } = useFetch(entity);
  return (
    <div className="container">
      {!loading && <h1 className="text-white">{titulo}</h1>}
      <Slider {...settings} style={{ textColor: "black" }}>
        {data &&
          data.map((d, i) => {
            return (
              <div key={i}>
                {poster ? (
                  <div
                    className="degradadoF mx-1"
                    style={{
                      height: "325px",
                      background: `linear-gradient(rgb(255 255 255 / 0%),rgba(0, 0, 0, 0.780)), url(${API.imageUrl}${API.imageQuality.poster.Small}${d.poster_path})`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundAttachment: "fixed",
                    }}
                  />
                ) : (
                  <div
                    className="degradadoF mx-1"
                    style={{
                      height: "150px",
                      background: `linear-gradient(rgb(255 255 255 / 0%),rgba(0, 0, 0, 0.780)), url(${API.imageUrl}${API.imageQuality.backdrop.Small}${d.backdrop_path})`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundAttachment: "fixed",
                    }}
                  />
                )}
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default MySlider;

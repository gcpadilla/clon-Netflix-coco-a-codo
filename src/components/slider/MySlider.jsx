import React from "react";
import Slider from "react-slick";
import { settings } from "./sliderSeting";
import "./slider.css";
import { API } from "../../config/constants";
import useFetch from "../../hooks/useFetch";
import Error from "../error/Error";
import Poster from "../poster/Poster";
import Backdrop from "../backdrop/Backdrop";

const MySlider = ({ entity, titulo, poster }) => {
  const { data, loading, error } = useFetch(entity);
  return (
    <div className="container">
      {!loading && <h1 className="text-white">{titulo}</h1>}
      {error && <Error />}
      <Slider {...settings} style={{ textColor: "black" }}>
        {data &&
          data.map((d, i) => {
            return (
              <div key={i}>
                {poster ? (
                  <Poster
                    poster={`${API.imageUrl}${API.imageQuality.poster.Small}${d.poster_path}`}
                  />
                ) : (
                  <Backdrop
                    backdrop={`${API.imageUrl}${API.imageQuality.backdrop.Small}${d.backdrop_path}`}
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

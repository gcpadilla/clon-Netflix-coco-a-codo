import React from "react";
import "./card.css";
import moment from "moment";
import "moment/locale/es";
import { API } from "../../config/constants";

const Card = (props) => {
  const { movie } = props;

  return (
    <>
      <div className="card">
        <img
          src={`${API.imageUrl}${API.imageQuality.backdrop.Medium}${movie.backdrop_path}`}
          className="card-img-top"
          alt={movie.original_title}
        />
        <div className="card-body">
          <h5 className="card-title text-center">
            {movie.title ? movie.title : movie.original_name}
          </h5>
          <p className="card-text justify lh-base p-1">
            {movie.overview.length > 465
              ? `${movie.overview.substring(0, 465)}...`
              : movie.overview}
          </p>
        </div>
        <div className="card-footer text-muted text-end bg-transparent">
          {moment(movie.release_date).format("LL")}
        </div>
      </div>
    </>
  );
};

export default Card;

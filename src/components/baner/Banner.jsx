import React from "react";
import moment from "moment";
import "moment/locale/es";
import Divider from "../divider/Divider";
import Error from "../error/Error";
import "./banner.css";
import { FaPlay } from "react-icons/fa";
import Loading from "../loading/Loading";
import { API } from "../../config/constants";
import useFetch from "../../hooks/useFetch";

const Banner = ({ entity }) => {
  const { data, loading, error } = useFetch(entity);
  const aleatorio = Math.round(Math.random() * 20);
  return (
    <>
      {loading && (
        <div style={{ width: "100vW", height: "80vh" }}>
          <Loading color={"text-danger"} />
        </div>
      )}
      {error && <Error />}
      {data &&
        data.map((d, i) => {
          if (i === aleatorio) {
            return (
              <div
                key={i}
                style={{
                  backgroundImage: `linear-gradient(to left,rgb(255 255 255 / 0%),rgba(0, 0, 0, 0.9)), url(${API.imageUrl}${API.imageQuality.backdrop.Large}${d.backdrop_path})`,
                  position: "relative",
                  height: "85vh",
                  objectFit: "Contain",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  color: "white",
                }}
              >
                <div className="container bg-transparent">
                  <Divider height="130px" />
                  <div className="mb-4 bg-transparent tShadow netTitle">
                    {d.title ? d.title : d.original_name}
                  </div>
                  <span className=" bg-transparent tShadow netSpann">
                    {moment(d.release_date).format("MMMYYYY").toUpperCase()}
                  </span>
                  <div className="bg-transparent">
                    <button className="netButton ms-3">
                      <FaPlay className="me-2 bg-transparent" />
                      Reproducir
                    </button>
                  </div>
                  <div className="mt-4 bg-transparent">
                    <h4
                      className="justifyp-1 bg-transparent tShadow"
                      style={{ width: "65%" }}
                    >
                      {d.overview.length > 200
                        ? `${d.overview.substring(0, 199)}...`
                        : d.overview}
                    </h4>
                  </div>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
    </>
  );
};

export default Banner;

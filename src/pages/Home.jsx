import React, { useEffect, useState } from "react";
import { service } from "../config/service";
import Divider from "../components/divider/Divider";
import Nav from "../components/nav/Nav";
import MySlider from "../components/slider/MySlider";
import Banner from "../components/baner/Banner";
import Netflix from "../components/netflix/Netflix";

const Home = () => {
  const [go, setGo] = useState(false);

  const getUserAuth = async () => {
    const user = await service.trayGetAuthentication();

    if (user) {
      setGo(user.data.success);
    }
  };

  useEffect(() => {
    getUserAuth();
  }, []);

  return (
    <>
      {go ? (
        <>
          <Nav />
          <Banner entity={service.tryGetTopRateMovies()} />
          <Divider height={"40px"} />
          <MySlider
            titulo={"Películas en los cines"}
            entity={service.trayGetNowPlayingMovie()}
            poster={true}
          />
          <MySlider
            titulo={"Tendencias"}
            entity={service.tryGetTopRateMovies()}
            poster={true}
          />
          <MySlider
            titulo={"Populares"}
            entity={service.trayGetPopularMovies()}
            poster={false}
          />
          <MySlider
            titulo={"Series"}
            entity={service.trayGetDiscoverTv()}
            poster={false}
          />
          <MySlider
            titulo={"Proximamente"}
            entity={service.trayGetUpcomingMovie()}
            poster={true}
          />
          <MySlider
            titulo={"Discover movie"}
            entity={service.trayGetDiscoverMovies()}
            poster={true}
          />
        </>
      ) : (
        <Netflix />
      )}
    </>
  );
};

export default Home;

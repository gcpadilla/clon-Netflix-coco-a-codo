import React from 'react'
import { service } from '../config/service'
import Divider from '../components/divider/Divider'
import Nav from '../components/nav/Nav'
import MySlider from '../components/slider/MySlider'
import Baner from '../components/baner/Baner'

const Home = () => {
  return (
    <>
      <Nav />
      <Baner entity={service.trayGetPopularMovies()}/>
      <Divider height={"40px"}/>
      <MySlider titulo={"Tendencias"} entity={service.tryGetTopRateMovies()} poster={true} />
      <MySlider titulo={"Populares"} entity={service.trayGetPopularMovies()} poster={false}/>
      <MySlider titulo={"Series"} entity={service.trayGetDiscoverTv()} poster={false}/>
      <MySlider titulo={"Proximamente"} entity={service.trayGetUpcomingMovie()} poster={true}/>
      <MySlider titulo={"Discover movie"} entity={service.trayGetDiscoverMovies()} poster={true}/>
    </>
  )
}

export default Home
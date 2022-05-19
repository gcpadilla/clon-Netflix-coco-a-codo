import axios from "axios";

import { API } from "./constants";

export const createUrl = {
  api: (entity, lang = "es", page = 1) => {
    const url = `${API.baseUrl}${entity}?api_key=${API.apiKey}&language=${API.language[lang]}&page=${page}`;
    return url;
  },
};

//! createUrl.api(API.entity.type.movie.topRate, API.language.es, 1);
//! createUrl.api(...[, , , 1]);`

export const tryGetTopRateMovies = async (lang = "es", page = 1) => {
  const url = createUrl.api(API.entity.type.movie.topRate, lang, page);
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    // if (error.response) {
    //   console.log(error.response.data);
    //   console.log(error.response.status);
    //   console.log(error.response.headers);
    // } else if (error.request) {
    //   console.log(error.request);
    // } else {
    //   console.log("Error", error.message);
    // }
    // console.log(error.config);
    return [];
  }
};

export const trayGetPopularMovies = async (lang = "es", page = 1) => {
  const url = createUrl.api(API.entity.type.movie.popular, lang, page);
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    return [];
  }
};

export const trayGetDiscoverMovies = async (lang = "es", page = 1) => {
  const url = createUrl.api(API.entity.type.discover.movie, lang, page);
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    return [];
  }
};

export const trayGetDiscoverTv = async (lang = "es", page = 1) => {
  const url = createUrl.api(API.entity.type.discover.tv, lang, page);
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    return [];
  }
};

export const trayGetUpcomingMovie = async (lang = "es", page = 1) => {
  const url = createUrl.api(API.entity.type.movie.upcoming, lang, page);
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    return [];
  }
};

/*
Add Supported Image Sizes  
                                 Min Res      Max Res  
poster   = Poster ............  500 x 750   2000 x 3000  
backdrop = Fanart ............ 1280 x 720   3840 x 2160  
still    = TV Show Episode ... 1280 x 720   3840 x 2160  
profile  = Actors Actresses ..  300 x 450   2000 x 3000  
logo     = TMDb Logo  

## API Supported Image Sizes  

|  poster  | backdrop |  still   | profile  |   logo   |
| :------: | :------: | :------: | :------: | :------: |
| -------- | -------- | -------- |    w45   |    w45   |
|    w92   | -------- |    w92   | -------- |    w92   |
|   w154   | -------- | -------- | -------- |   w154   |
|   w185   | -------- |   w185   |   w185   |   w185   |
| -------- |   w300   |   w300   | -------- |   w300   |
|   w342   | -------- | -------- | -------- | -------- |
|   w500   | -------- | -------- | -------- |   w500   |
| -------- | -------- | -------- |   h632   | -------- |
|   w780   |   w780   | -------- | -------- | -------- |
| -------- |  w1280   | -------- | -------- | -------- |
| original | original | original | original | original |  

Original Size is the size of the uploaded image.  
It can be between Minimum Resolution and Maximum Resolution.
*/

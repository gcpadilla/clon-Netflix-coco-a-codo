export const API = {
  netflixImage:
    "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg",
  authentication:
    `http://api.themoviedb.org/3/authentication/guest_session/new?api_key=${process.env.REACT_APP_apiKey}`,
  baseUrl: process.env.REACT_APP_baseUrl,
  apiKey: process.env.REACT_APP_apiKey,
  entity: {
    type: {
      movie: {
        topRate: "/movie/top_rated",
        popular: "/movie/popular",
        upcoming: "/movie/upcoming",
        nowPlaying: "/movie/now_playing",
      },
      tv: {
        topRate: "/tv/top_rated",
        popular: "/tv/popular",
        latest: "/tv/latest",
        onAir: "/tv/on_the_air",
      },
      discover: {
        movie: "/discover/movie",
        tv: "/discover/tv",
      },
    },
  },
  language: {
    en: "en-US",
    es: "es-ES",
  },
  imageUrl: "https://image.tmdb.org/t/p",
  imageQuality: {
    poster: {
      Small: "/w154",
      Medium: "/w500",
      Large: "/w1280",
    },
    backdrop: {
      Small: "/w300",
      Medium: "/w780",
      Large: "/w1280",
    },
  },
};

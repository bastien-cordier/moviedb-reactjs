/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = "https://api.themoviedb.org/3/";

export { API_KEY };

const fetchMovies = async (endpoint) => {
  const response = await axios.get(
    `${API_URL}${endpoint}?language=fr-FR&api_key=${API_KEY}`
  );
  return response.data;
};

export default {
  getHomeMovies: async () => {
    return [
      {
        slug: "top-rated",
        title: "Mieux notés",
        items: await fetchMovies("movie/top_rated"),
      },
      {
        slug: "trend-allweek",
        title: "Tendances",
        items: await fetchMovies("trending/all/week"),
      },
      {
        slug: "action",
        title: "Films d'action",
        items: await fetchMovies("discover/movie?with_genres=28"),
      },
      {
        slug: "upcoming",
        title: "Prochaines sorties",
        items: await fetchMovies("movie/upcoming"),
      },
      {
        slug: "nowplaying",
        title: "Au cinéma",
        items: await fetchMovies("movie/now_playing"),
      },
    ];
  },

  getyMovieInfo: async (movieId, type) => {
    let info = [];
    if (movieId) {
      switch (type) {
        case "movie":
          info = await fetchMovies(`movie/${movieId}`);
          break;
        case "tv":
          info = await fetchMovies(`tv/${movieId}`);
          break;
        default:
          break;
      }
    }
    return info;
  },
};

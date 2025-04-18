import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TOKEN_KEY;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// Додаємо ключ у параметри кожного запиту
export const getTrendingMovies = () =>
  axiosInstance.get("/trending/movie/day", {
    params: { api_key: API_KEY },
  });

export const searchMovies = (query) =>
  axiosInstance.get("/search/movie", {
    params: {
      query,
      include_adult: false,
      api_key: API_KEY,
    },
  });

export const getMovieDetails = (id) =>
  axiosInstance.get(`/movie/${id}`, {
    params: { api_key: API_KEY },
  });

export const getMovieCredits = (id) =>
  axiosInstance.get(`/movie/${id}/credits`, {
    params: { api_key: API_KEY },
  });

export const getMovieReviews = (id) =>
  axiosInstance.get(`/movie/${id}/reviews`, {
    params: { api_key: API_KEY },
  });

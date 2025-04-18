import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TOKEN = import.meta.env.VITE_TOKEN_KEY;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: TOKEN,
  },
});

export const getTrendingMovies = () => axiosInstance.get("/trending/movie/day");
export const searchMovies = (query) =>
  axiosInstance.get(`/search/movie?query=${query}&include_adult=false`);
export const getMovieDetails = (id) => axiosInstance.get(`/movie/${id}`);
export const getMovieCredits = (id) =>
  axiosInstance.get(`/movie/${id}/credits`);
export const getMovieReviews = (id) =>
  axiosInstance.get(`/movie/${id}/reviews`);

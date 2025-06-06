import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../api";
import MovieList from "../components/MovieList.jsx";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(({ data }) => setMovies(data.results));
  }, []);

  return (
    <main>
      <h1>Trending Movies</h1>
      <MovieList movies={movies} />
    </main>
  );
};

export default HomePage;

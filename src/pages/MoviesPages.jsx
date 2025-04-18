import { useState } from "react";
import { searchMovies } from "../../api";
import MovieList from "../components/MovieList";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;
    const { data } = await searchMovies(query);
    setMovies(data.results);
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movie..."
        />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </>
  );
};

export default MoviesPage;

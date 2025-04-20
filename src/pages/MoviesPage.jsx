import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../../api.js";
import MovieList from "../components/MovieList.jsx";
import css from "../pages/MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value.trim();
    if (!searchValue) return;

    setSearchParams({ query: searchValue });
  };

  useEffect(() => {
    if (!query) return;

    searchMovies(query).then(({ data }) => {
      setMovies(data.results);
    });
  }, [query]);

  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="search"
          defaultValue={query}
          className={css.input}
          placeholder="Search movies..."
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>

      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;

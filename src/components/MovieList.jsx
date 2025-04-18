import css from "./MovieList.module.css";
import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map(({ id, title }) => (
        <li key={id} className={css.card}>
          <Link
            to={`/movies/${id}`}
            state={{ from: location }}
            className={css.link}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;

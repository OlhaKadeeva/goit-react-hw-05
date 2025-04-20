import {
  Link,
  useParams,
  useLocation,
  Routes,
  Route,
  useNavigate,
  Outlet,
} from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { getMovieDetails } from "../../api";
import css from "../pages/MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const backLinkRef = useRef(location.state?.from || "/movies");

  useEffect(() => {
    getMovieDetails(movieId).then(({ data }) => setMovie(data));
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className={css.container}>
      <button
        onClick={() => navigate(backLinkRef.current)}
        className={css.button}
      >
        ⬅️ Go back
      </button>
      <div className={css.content}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className={css.img}
        />
        <div>
          <h2>
            {movie.title} ({movie.release_date?.slice(0, 4)})
          </h2>
          <p>
            <b>User Score:</b> {Math.round(movie.vote_average * 10)}%
          </p>

          <h3>Overview</h3>
          <p>{movie.overview}</p>

          <h3>Genres</h3>
          <p>{movie.genres.map((genre) => genre.name).join("  ")}</p>
        </div>
      </div>

      <div className={css.additional}>
        <h3>Additional info</h3>
        <ul>
          <li>
            <Link
              to="cast"
              state={{ from: backLinkRef.current }}
              className={css.link}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to="reviews"
              state={{ from: backLinkRef.current }}
              className={css.link}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;

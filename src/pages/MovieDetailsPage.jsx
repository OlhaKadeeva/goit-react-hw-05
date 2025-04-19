import css from "../pages/MovieDetailsPage.module.css";
import {
  Link,
  useParams,
  useLocation,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../../api";
import MovieCast from "../components/MovieCast.jsx";
import MovieReviews from "../components/MovieReviews.jsx";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const backLink = location.state?.from || "/movies";

  useEffect(() => {
    getMovieDetails(movieId).then(({ data }) => setMovie(data));
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className={css.container}>
      <button onClick={() => navigate(backLink)} className={css.button}>
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
            <Link to="cast" state={{ from: backLink }} className={css.link}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backLink }} className={css.link}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="cast" element={<MovieCast />} />
        <Route path="reviews" element={<MovieReviews />} />
      </Routes>
    </div>
  );
};

export default MovieDetailsPage;

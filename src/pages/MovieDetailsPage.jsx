import css from "../pages/MovieDetailsPage";
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
import MovieCast from "../components/MovieCast";
import MovieReviews from "../components/MovieReviews";

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
    <>
      <button onClick={() => navigate(backLink)} className={css.button}>
        Go back
      </button>
      <div className={css.content}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>

      <div className={css.additional}>
        <h3>Additional info</h3>
        <ul>
          <li>
            <Link to="cast" state={{ from: backLink }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backLink }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="cast" element={<MovieCast />} />
        <Route path="reviews" element={<MovieReviews />} />
      </Routes>
    </>
  );
};

export default MovieDetailsPage;

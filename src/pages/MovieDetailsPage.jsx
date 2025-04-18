import css from "../pages/MovieDetailsPage";

const MovieDetailsPage = () => {
  return (
    <>
      <button onClick={() => navigate(backLink)} className={css.button}>
        Go back
      </button>
      <div className={css.content}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className={css.img}
        />
        <div>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
      </div>

      <div className={css.additional}>
        <h3>Additional Info</h3>
        <Link to="cast" className={css.link} state={{ from: backLink }}>
          Cast
        </Link>
        <Link to="reviews" className={css.link} state={{ from: backLink }}>
          Reviews
        </Link>
      </div>
    </>
  );
};

export default MovieDetailsPage;

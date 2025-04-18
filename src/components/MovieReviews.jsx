import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieReviews } from "../../api";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(({ data }) => setReviews(data.results));
  }, [movieId]);

  return reviews.length ? (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <h4>{author}</h4>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>No reviews yet.</p>
  );
};

export default MovieReviews;

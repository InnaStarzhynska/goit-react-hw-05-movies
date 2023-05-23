import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieReviews } from 'apiService/apiService';
import {ReviewsList, AuthorName} from './Reviews.styled'

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    fetchMovieReviews(moviesId)
      .then(response => setReviews([...response]))
      .catch(error => console.log(error.message));
  }, [moviesId]);

  return (
    <ReviewsList>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <AuthorName>{author}</AuthorName>
          <p>{content}</p>
        </li>
      ))}
    </ReviewsList>
  );
}

import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from 'apiService/apiService';
import {WrapperMovies, Form, Input, Films, Film} from './Movies.styled'

export default function Movies() {
  const [films, setFilms] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    }
    fetchMovieByQuery(query)
      .then(response => setFilms([...response]))
      .catch(error => console.log(error.message));
  }, [query]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const searchQuery = evt.target.elements.query.value;
    setSearchParams({ query: searchQuery });
  };
  return (
    <WrapperMovies>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="query" />
        <button type="submit">Search</button>
      </Form>
      <Films>
        {films.map(({ id, title }) => (
          <li key={id}>
            <Film to={`${id}`} state={{ from: location }}>
              {title}
            </Film>
          </li>
        ))}
      </Films>
    </WrapperMovies>
  );
}

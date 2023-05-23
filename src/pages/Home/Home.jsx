import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from '../../apiService/apiService';
import { Films, Film, Wrapper } from './Home.styled';

export default function Home() {
  const [films, setFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrendingMovies()
      .then(response => setFilms([...response]))
      .catch(error => console.log(error.message));
  }, []);

  return (
    <Wrapper>
      <Films>
        {films.map(({ id, title }) => (
          <li key={id}>
            <Film to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Film>
          </li>
        ))}
      </Films>
    </Wrapper>
  );
}

import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { fetchMovieCast } from "apiService/apiService";
import { ActorsList, ActorsItem, ActorName } from "./Cast.styled"; 
import defaultImage from '../../images/imageFoto.png'

export default function Cast() {
  const [actors, setActors] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
        fetchMovieCast(moviesId).then(response => setActors([...response])).catch(error => console.log(error.message))
  }, [moviesId])
  
  return (
    <ActorsList>
      {actors.map(({id, profile_path: profilePath, name, character}) => 
        <ActorsItem key={id}>
          <img src={profilePath ? `https://image.tmdb.org/t/p/w200${profilePath}` : `${defaultImage}`} alt={name} width={200} height={300}/>
          <ActorName>{name}</ActorName>
          <p>{character}</p>
        </ActorsItem>
      )}
   </ActorsList>
  )
}

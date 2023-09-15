import { getActorsForId } from 'API';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getCastData() {
      try {
        const data = await getActorsForId(movieId);
        setCast(data.data.cast);
      } catch (error) {
        console.log(error);
      }
    }
    getCastData();
  }, [movieId]);

  return (
    <ul>
      {cast.map(({ name, profile_path, id }) => (
        <li key={id}>
          <h3>{name}</h3>
          <img
            src={`https://image.tmdb.org/t/p/w500${profile_path}`}
            alt={name}
            width="80"
          />
        </li>
      ))}
    </ul>
  );
};

export default Cast;

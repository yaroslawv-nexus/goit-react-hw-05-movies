import { getActorsForId } from 'API';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    async function getCastData() {
      try {
        const data = await getActorsForId(movieId, controller);
        setCast(data.data.cast);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          console.log(error);
        }
      }
    }
    getCastData();

    return () => {
      controller.abort();
    };
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

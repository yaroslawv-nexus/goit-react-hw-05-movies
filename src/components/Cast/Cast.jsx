import { getActorsForId } from 'API';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastList, CastItem, CastImg, CastName } from './Cast.styled';

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
    <>
      {cast.length > 0 && (
        <CastList>
          {cast.map(({ name, profile_path, id }) => (
            <CastItem key={id}>
              <CastName>{name}</CastName>
              <CastImg
                src={
                  profile_path !== null
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : 'https://sneg.top/uploads/posts/2023-06/1687806511_sneg-top-p-avatarka-zaglushka-pinterest-3.png'
                }
                alt={name}
                width="80"
              />
            </CastItem>
          ))}
        </CastList>
      )}
      {cast.length === 0 && <b>Reviews not fiend</b>}
    </>
  );
};

export default Cast;

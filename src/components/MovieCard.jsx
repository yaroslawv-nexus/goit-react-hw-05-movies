import { getMovieForId } from 'API';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieCard = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function getMovieData() {
      try {
        const movieData = await getMovieForId(movieId);
        setMovie(movieData.data);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieData();
  }, [movieId]);

  const { title, genres, vote_average, overview, release_date, backdrop_path } =
    movie;

  return (
    <div>
      <h2>{`${title} (${release_date?.split('-')[0]})`}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="" />
      <p>{`UserScore: ${vote_average}`}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h4>Genres</h4>
      <p>
        {genres
          ?.reduce((prev, element) => {
            return prev + ' ' + element.name;
          }, '')
          .trim()}
      </p>
    </div>
  );
};

export default MovieCard;

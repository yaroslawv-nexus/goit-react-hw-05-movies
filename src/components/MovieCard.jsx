import React from 'react';

const MovieCard = ({ movie }) => {
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

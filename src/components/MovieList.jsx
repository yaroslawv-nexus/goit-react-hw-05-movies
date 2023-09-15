import React from 'react';
import MovieListItem from './MovieListItem';

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ title, id }) => (
        <MovieListItem title={title} id={id} key={id} />
      ))}
    </ul>
  );
};

export default MovieList;

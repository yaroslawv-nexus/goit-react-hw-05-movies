import React from 'react';
import MovieListItem from '../MovieListItem/MovieListItem';
import { ListStyled } from './MovieList.styled';

const MovieList = ({ movies }) => {
  return (
    <ListStyled>
      {movies.map(({ title, id }) => (
        <MovieListItem title={title} id={id} key={id} />
      ))}
    </ListStyled>
  );
};

export default MovieList;

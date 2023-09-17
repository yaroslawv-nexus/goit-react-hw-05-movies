import React from 'react';
import { useLocation } from 'react-router-dom';
import { MovieItem, MovieItemLink } from './MovieListItem.styled';

const MovieListItem = ({ title, id }) => {
  const location = useLocation();

  return (
    <MovieItem>
      <MovieItemLink to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </MovieItemLink>
    </MovieItem>
  );
};

export default MovieListItem;

import MovieCard from 'components/MovieCard';
import React, { useRef } from 'react';
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const location = useLocation();
  const locationBackRef = useRef(location?.state?.from ?? '/');

  return (
    <div>
      <Link to={locationBackRef.current}>Go back</Link>
      <MovieCard />
      <NavLink to="cast">Cast</NavLink>
      <NavLink to="reviews">Review</NavLink>
      <Outlet />
    </div>
  );
};

export default MovieDetails;

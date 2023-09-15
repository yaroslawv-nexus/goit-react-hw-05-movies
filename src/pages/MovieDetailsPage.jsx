import { getMovieForId } from 'API';
import MovieCard from 'components/MovieCard';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import {
  Outlet,
  NavLink,
  Link,
  useLocation,
  useParams,
} from 'react-router-dom';
import ScaleLoader from 'react-spinners/ScaleLoader';

const MovieDetails = () => {
  const location = useLocation();
  const locationBackRef = useRef(location?.state?.from ?? '/');
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

  return (
    <div>
      <Link to={locationBackRef.current}>Go back</Link>
      {Object.getOwnPropertyNames(movie).length !== 0 && (
        <MovieCard movie={movie} />
      )}
      <NavLink to="cast">Cast</NavLink>
      <NavLink to="reviews">Review</NavLink>
      <Suspense fallback={<ScaleLoader color="#36d7b7" />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;

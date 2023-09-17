import { getMovieForId } from 'API';
import MovieCard from 'components/MovieCard/MovieCard';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { SubLink } from './MovieDetailsPage.styled';

const MovieDetails = () => {
  const location = useLocation();
  const locationBackRef = useRef(location?.state?.from ?? '/');
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const controller = new AbortController();
    async function getMovieData() {
      try {
        const movieData = await getMovieForId(movieId, controller);
        setMovie(movieData.data);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          console.log(error);
        }
      }
    }
    getMovieData();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <div>
      <SubLink to={locationBackRef.current}>Go back</SubLink>
      {Object.getOwnPropertyNames(movie).length !== 0 && (
        <MovieCard movie={movie} />
      )}
      <SubLink to="cast">Cast</SubLink>
      <SubLink to="reviews">Review</SubLink>
      <Suspense fallback={<ScaleLoader color="#36d7b7" />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;

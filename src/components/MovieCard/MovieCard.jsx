import React from 'react';
import {
  MovieContStyled,
  MovieTitleStyled,
  MovieImageStyled,
  MovieScoreStyled,
  MovieOverviewStyled,
  MovieGenresStyled,
} from './MovieCard.styled';

const MovieCard = ({ movie }) => {
  const { title, genres, vote_average, overview, release_date, backdrop_path } =
    movie;

  return (
    <MovieContStyled>
      <MovieTitleStyled>{`${title} (${
        release_date?.split('-')[0]
      })`}</MovieTitleStyled>
      <MovieImageStyled
        src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
        alt=""
      />
      <MovieScoreStyled>{`UserScore: ${vote_average}`}</MovieScoreStyled>
      <h3>Overview</h3>
      <MovieOverviewStyled>{overview}</MovieOverviewStyled>
      <h4>Genres</h4>
      <MovieGenresStyled>
        {genres
          ?.reduce((prev, element) => {
            return prev + ' ' + element.name;
          }, '')
          .trim()}
      </MovieGenresStyled>
    </MovieContStyled>
  );
};

export default MovieCard;

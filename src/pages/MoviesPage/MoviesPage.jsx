import { getMovieForSearch } from 'API';
import MovieList from 'components/MovieList/MovieList';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { MovieSearch, MovieSearchButton } from './MoviesPage.styled';

const Movies = () => {
  const [params, setParams] = useSearchParams();
  const [searchWord, setSearchWord] = useState('');
  const [findedFilm, setfindedFilm] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function findFilm() {
      if (params.get('query')) {
        try {
          setfindedFilm([]);
          setLoader(true);
          const data = await getMovieForSearch(params.get('query'), controller);
          setfindedFilm(data.data.results);
          setLoader(false);
        } catch (error) {
          if (error.code !== 'ERR_CANCELED') {
            console.log(error);
          }
        }
      }
    }
    findFilm();

    return () => {
      controller.abort();
    };
  }, [params]);

  const onSubmitSearch = async e => {
    e.preventDefault();
    params.set('query', searchWord);
    setParams(params);
  };

  return (
    <div>
      <form onSubmit={onSubmitSearch}>
        <MovieSearch
          type="text"
          onChange={e => {
            setSearchWord(e.target.value);
          }}
          value={searchWord}
        />
        <MovieSearchButton type="submit">Search</MovieSearchButton>
      </form>
      {findedFilm.length !== 0 && <MovieList movies={findedFilm} />}
      {loader && <ScaleLoader color="#36d7b7" />}
    </div>
  );
};

export default Movies;

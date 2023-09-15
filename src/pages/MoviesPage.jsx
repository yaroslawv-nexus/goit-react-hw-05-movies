import { getMovieForSearch } from 'API';
import MovieList from 'components/MovieList';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [params, setParams] = useSearchParams();
  const [searchWord, setSearchWord] = useState('');
  const [findedFilm, setfindedFilm] = useState([]);

  useEffect(() => {
    async function findFilm() {
      if (params.get('query')) {
        try {
          const data = await getMovieForSearch(params.get('query'));
          setfindedFilm(data.data.results);
        } catch (error) {
          console.log(error);
        }
      }
    }
    findFilm();
  }, [params]);

  const onSubmitSearch = async e => {
    e.preventDefault();
    params.set('query', searchWord);
    setParams(params);
  };

  return (
    <div>
      <form onSubmit={onSubmitSearch}>
        <input
          type="text"
          onChange={e => {
            setSearchWord(e.target.value);
          }}
          value={searchWord}
        />
        <button type="submit">Search</button>
      </form>

      {findedFilm.length !== 0 && <MovieList movies={findedFilm} />}
    </div>
  );
};

export default Movies;

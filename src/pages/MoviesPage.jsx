import { getMovieForSearch } from 'API';
import MovieList from 'components/MovieList';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ScaleLoader from 'react-spinners/ScaleLoader';

const Movies = () => {
  const [params, setParams] = useSearchParams();
  const [searchWord, setSearchWord] = useState('');
  const [findedFilm, setfindedFilm] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function findFilm() {
      if (params.get('query')) {
        try {
          setfindedFilm([]);
          setLoader(true);
          const data = await getMovieForSearch(params.get('query'));
          setfindedFilm(data.data.results);
          setLoader(false);
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
      {loader && <ScaleLoader color="#36d7b7" />}
    </div>
  );
};

export default Movies;

import { getTrend } from 'API';
import MovieList from 'components/MovieList';
import React, { useEffect, useState } from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';

const Home = () => {
  const [trends, setTrends] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function getTrends() {
      try {
        setLoader(true);
        const trendsData = await getTrend();
        setTrends(trendsData.data.results);
        setLoader(false);
      } catch (error) {
        console.log(error);
      }
    }
    getTrends();
  }, []);

  return (
    <div>
      <MovieList movies={trends} />
      {loader && <ScaleLoader color="#36d7b7" />}
    </div>
  );
};

export default Home;

import { getTrend } from 'API';
import MovieList from 'components/MovieList';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    async function getTrends() {
      try {
        const trendsData = await getTrend();
        setTrends(trendsData.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    getTrends();
  }, []);

  return <MovieList movies={trends} />;
};

export default Home;

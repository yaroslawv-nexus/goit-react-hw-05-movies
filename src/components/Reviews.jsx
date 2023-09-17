import { getReviewsForId } from 'API';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    async function getCastData() {
      try {
        const data = await getReviewsForId(movieId, controller);
        setReviews(data.data.results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          console.log(error);
        }
      }
    }
    getCastData();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <ul>
      {reviews.map(({ author, content, id }) => (
        <li key={id}>
          <h3>{author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;

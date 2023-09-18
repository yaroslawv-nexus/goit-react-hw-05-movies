import { getReviewsForId } from 'API';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  ReviewsList,
  ReviewItem,
  ReviewAuthor,
  ReviewContent,
} from './Reviews.styled';

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
    <>
      <ReviewsList>
        {reviews.map(({ author, content, id }) => (
          <ReviewItem key={id}>
            <ReviewAuthor>{author}</ReviewAuthor>
            <ReviewContent>{content}</ReviewContent>
          </ReviewItem>
        ))}
      </ReviewsList>
      {reviews.length === 0 && <b>Reviews not fiend</b>}
    </>
  );
};

export default Reviews;

import React from 'react';
import StarRating from './StarRating.jsx'


const Review = (props) => {
  //pass the star rating in as the invocation of the StarRating function in StarRating.jsx
  //pass the UUID in as an argument when you invoke the StarRating function
  const mappedReviews = props.reviewData.map((review) =>
    <>
      <div class="container product-review">
        <span class="reviewer-name" >{review.customerName}</span>
        <span><StarRating starsAwarded={review.starRating}/></span>
        <span class="date" >{review.date}</span>
        <span class="reviewe-title" >{review.reviewTitle}  - </span>
        <span class="review" >{review.review}</span>
      </div>
    </>
  );


  return (
    <>
      {mappedReviews}
    </>
  );
}

export default Review;


/*
You'll need to put this into the mapped reviews once you figure out how you're going to do the stars
        <span class="star-icon pull-left">::before</span>
        <span class="star-icon pull-left">::before</span>
        <span class="star-icon pull-left">::before</span>
        <span class="star-icon pull-left">::before</span>
        <span class="star-icon pull-left">::before</span>
*/
import React from 'react';
import Review from './Review.jsx';
import StarTotals from './StarTotals.jsx';
import AverageStarRating from './AverageStarRating.jsx';


const Reviews = (props) => {
  return (
    <>
      <div>
        <h2 className="subheading" >REVIEWS</h2>
        <div className="average-rating">
        <AverageStarRating reviewData={props.reviewData}/>
        </div>
        <div className="star-totals">
        <StarTotals reviewData={props.reviewData}/>
        </div>
        <div className="review-list" >
        <Review reviewData={props.reviewData}/>
        </div>
      </div>
    </>
  );
}

export default Reviews;

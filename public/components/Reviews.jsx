import React from 'react';
import Review from './Review.jsx';
import StarTotals from './StarTotals.jsx';
import AverageStarRating from './AverageStarRating.jsx';


const Reviews = (props) => {
  return (
    <>
      <div className="container product-reviews">
        <h2 className="subheading" >REVIEWS</h2>
        <AverageStarRating reviewData={props.reviewData}/>
        <br></br>
        <StarTotals reviewData={props.reviewData}/>
        <Review reviewData={props.reviewData}/>
      </div>
    </>
  );
}

export default Reviews;

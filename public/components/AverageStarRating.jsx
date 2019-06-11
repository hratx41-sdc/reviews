import React from 'react';


const AverageStarRating = (props) => {
  
  const findAverageRating = (props) => {
  //average out the star rating for all reviews on the given uuid  
    let total = 0;
    const numberOfReviews = props.reviewData.length;
    for(var i = 0; i < props.reviewData.length; i++) {
      total += props.reviewData[i].starRating;
    }
    let average = total / numberOfReviews;

    //if the average rating is 1
    if(average > 1 && average < 2) {
      return (
        <React.Fragment>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>

          <span> {numberOfReviews} Reviews</span>
        </React.Fragment>
      );
    }

    //if the average rating is 2
    if(average > 2 && average < 3) {
      return (
        <React.Fragment>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>

          <span> {numberOfReviews} Reviews</span>
        </React.Fragment>
      );
    }

    //if the average rating is 3
    if(average > 3 && average < 4) {
      return (
        <React.Fragment>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>

          <span> {numberOfReviews} Reviews</span>
        </React.Fragment>
      );
    }

    //if the average rating is 4
    if(average > 4 && average < 5) {
      return (
        <React.Fragment>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>

          <span> {numberOfReviews} Reviews</span>
        </React.Fragment>
      );
    }

    //if the average rating is 5
    if(average === 5) {
      return (
        <React.Fragment>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>

          <span> {numberOfReviews} Reviews</span>
        </React.Fragment>
      );
    }
  };

  let averageRating = findAverageRating(props); 
  


  return (
    <React.Fragment>
      {averageRating}
    </React.Fragment>
  );
}

export default AverageStarRating;


/*
You'll need to put this into the mapped reviews once you figure out how you're going to do the stars
        <span class="star-icon pull-left">::before</span>
        <span class="star-icon pull-left">::before</span>
        <span class="star-icon pull-left">::before</span>
        <span class="star-icon pull-left">::before</span>
        <span class="star-icon pull-left">::before</span>
*/

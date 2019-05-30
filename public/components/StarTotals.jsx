//This component needs reworking, as it was copied from StarRating.jsx when I accidentally combined their functionality.

import React from 'react';


const StarTotals = (props) => {
  
  const getStarTotals = (props) => { 
    let totalOnes = 0;
    let totalTwos = 0;
    let totalThrees = 0;
    let totalFours = 0;
    let totalFives = 0;

    for(var i = 0; i < props.reviewData.length; i++) {
      if(props.reviewData[i].starRating = 1) {
        totalOnes++;
      }

      if(props.reviewData[i].starRating = 2) {
        totalTwos++;
      }

      if(props.reviewData[i].starRating = 3) {
        totalThrees++;
      }

      if(props.reviewData[i].starRating = 4) {
        totalFours++;
      }

      if(props.reviewData[i].starRating = 5) {
        totalFives++;
      }
    }

      return (
        <>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span>({totalFives})</span>
          <br></br>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span>({totalFours})</span>
          <br></br>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span>({totalThrees})</span>
          <br></br>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span>({totalTwos})</span>
          <br></br>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span>({totalOnes})</span>
        </>
      );
  };

  const allStarTotals = getStarTotals(props); 
  


  return (
    <>
      {allStarTotals}
    </>
  );
}

export default StarTotals;


/*
You'll need to put this into the mapped reviews once you figure out how you're going to do the stars
        <span class="star-icon pull-left">::before</span>
        <span class="star-icon pull-left">::before</span>
        <span class="star-icon pull-left">::before</span>
        <span class="star-icon pull-left">::before</span>
        <span class="star-icon pull-left">::before</span>
*/
// font-family: "Oswald" san-serif;


import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Reviews from './components/Reviews.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      uuid: 12, //this will be a number based on the current UUID
      reviews: [], //find a way to get currentUuid's reviews into state
      oneStarTotal: 0, //this will be a number, but I might not need to put this into state each time
      twoStarTotal: 0, //this will be a number, but I might not need to put this into state each time
      threeStarTotal: 0, //this will be a number, but I might not need to put this into state each time
      fourStarTotal: 0, //this will be a number, but I might not need to put this into state each time
      fiveStarTotal: 0, //this will be a number, but I might not need to put this into state each time
      averageRating: 0//this will be a number that determines how many stars show illuminated
    }
  }

/* This lifecycle method should make a get request to the databse to gather data for the current UUID.
I will also need to find a way to know which UUID is on screen. */
  componentWillMount() {
    axios.get(`/api/reviews/${this.state.uuid}`)
    .then((res) => {
      this.setState({reviews: res.data[0].reviews})
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <>
      <Reviews reviewData={this.state.reviews}/>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


// font-family: "Oswald" san-serif;


import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Reviews from './components/Reviews.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      uuid: 10, //talk to hunter about how this works
      reviews: [], //find a way to get currentUuid's reviews into state
    }
  }

/* This lifecycle method should make a get request to the databse to gather data for the current UUID.
I will also need to find a way to know which UUID is on screen. */
  componentWillMount() {
    axios.get(`/api/reviews/${this.state.uuid}`)
    .then((res) => {
      console.log(res.data);
      this.setState({reviews: res.data});
    })
    .catch((err) => {
      console.log(err);
    })
  }

  componentDidMount() {
    window.addEventListener('updateUuid', (event) => {
      this.setState({uuid: event.detail});
    }, false);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.uuid !== prevState.uuid) {
      axios.get(`/api/reviews/${this.state.uuid}`)
    .then((res) => {
      console.log(res.data)
      this.setState({reviews: res.data})
    })
    .catch((err) => {
      console.log(err);
    })
    }
  }

  render() {
    return (
      <>
      <Reviews reviewData={this.state.reviews}/>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('reviews'));


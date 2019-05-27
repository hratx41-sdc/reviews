import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    //   curentUuid: 
    }
  }

//   componentDidMount() {
//     axios.get('/msg')
//     .then( (response) => this.setState({messages: response.data}))
//     .catch((err) => console.log(err))
//   }

  render() {
    return (
      <>
      <h1>Crew Reviews</h1>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


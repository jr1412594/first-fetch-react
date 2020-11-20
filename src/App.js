import { Component } from 'react';


import './App.css';

class App extends Component {

  state = {
    tvShows: []
  }

  componentDidMount(){
    fetch('http://api.tvmaze.com/shows')
      .then(response => response.json())
      .then(tvShows => this.setState({tvShows: tvShows}))
  }

  render (){
    return (
      <div className="App">
  
      </div>
    );
  }
}

export default App;

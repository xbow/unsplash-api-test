import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Unsplash, { toJson } from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: process.env.REACT_APP_ID,
  secret: process.env.REACT_APP_SECRET,
  callbackUrl: "{CALLBACK_URL}"
});

class App extends Component {

  state = {
    results: []
  }

  getImages = searchTerm => {
    unsplash.search.photos(searchTerm, 1)
      .then(toJson)
      .then(json => {
        this.setState({ results: json.results })
      })
  }

  componentDidMount() {
    this.getImages('cats')
  }

  render() {
    return (
      <div className="App">
        {this.state.results.map(result => (
          <img key={result.id} alt={result.description} src={result.urls.small} />
        ))}
      </div>
    )
  }
}

export default App;

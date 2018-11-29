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

  getFirstThumb = searchTerm => {
    return unsplash.search.photos(searchTerm, 1)
      .then(toJson)
      .then(json => {
        console.log(json.results[0].urls.small)
      })
  }

  /*getSomeThumbs = searchTerm => {
    unsplash.search.photos(searchTerm, 1)
      .then(toJson)
      .then(json => {
        console.log(json.results[0].urls.small)
      })
  }*/

  render() {
    const cats = this.getFirstThumb('cats')
    return (
      <div className="App">
        <img src={cats} />
      </div>
    )
  }
}

export default App;

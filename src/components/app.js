import React, { Component } from 'react';

import MovieList from '../containers/movie_list';
import LoadMovie from '../components/loading_movie.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <MovieList />
        <LoadMovie />
      </div>
    );
  }
}

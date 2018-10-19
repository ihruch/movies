import React, { Component } from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';

import MovieListPage    from './components/MovieListPage';
import SingleMoviePage  from './components/SingleMoviePage';

import SeriesListPage   from './components/SeriesListPage';
import SingleSeriesPage from './components/SingleSeriesPage';
import Header from './components/Header';
import './App.css';
import {MOVIES_PATH, SINGLE_MOVIE_PATH, SERIES_PATH, SINGLE_SERIES_PATH } from './redux/constants/routing.js';


class App extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="app-main">
        <Header />
        <Switch>   
          <Route path={MOVIES_PATH} component = { MovieListPage } /> 
          <Route path={SINGLE_MOVIE_PATH} component = { SingleMoviePage } /> 
          <Route path={SERIES_PATH} component = { SeriesListPage } /> 
          <Route path={SINGLE_SERIES_PATH} component = { SingleSeriesPage } /> 
          <Redirect to={MOVIES_PATH} />
        </Switch>
     </div>
    );
  }
}

export default App;

import Api from './../../api.js';
import { SINGLE_MOVIE } from '../constants/globals.js';
import { FETCH_SINGLE_MOVIE_SUCCESS  } from '../constants/actionTypes.js';
import { fetchMovies } from './moviesListAction';


export const fetchSingleMovieSuccess = () => ({
    type: 'FETCH_SINGLE_MOVIE_SUCCESS',
    
});

export const fetchSingleMovie = (id) => (dispatch, getState) => {
  dispatch(fetchMovies(localStorage.getItem('pageListMovie')));
  dispatch(fetchSingleMovieSuccess());

};




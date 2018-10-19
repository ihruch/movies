import Api from './../../api.js';
import { MOVIES } from './../constants/globals.js';
import { FETCH_MOVIES_BEGIN, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR } from './../constants/actionTypes.js';


export const fetchMoviesBegin = () => ({
     type: 'FETCH_MOVIES_BEGIN'
});

export const fetchMoviesSuccess = (payload) => ({
    type: 'FETCH_MOVIES_SUCCESS',
    payload: { payload },
});

export const fetchMoviesError = (err) => ({ 
  type: 'FETCH_MOVIES_ERROR',
  payload: { err },
})

export const fetchMovies = (page) => (dispatch, getState) => {
  dispatch(fetchMoviesBegin());

  Api.getMovieDataList(page).then( movies => {
    localStorage.setItem('pageListMovie', page);
    dispatch(fetchMoviesSuccess(movies));
  })
  .catch(error => dispatch(fetchMoviesError(error)));
};




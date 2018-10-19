import Api from './../../api.js';
import { MOVIES } from './../constants/globals.js';
import {FETCH_SERIES_BEGIN ,FETCH_SERIES_SUCCESS ,FETCH_SERIES_ERROR  } from './../constants/actionTypes.js';

export const fetchSeriesBegin = () => ({
     type: 'FETCH_SERIES_BEGIN'
});

export const fetchSeriesSuccess = (payload) => ({
    type: 'FETCH_SERIES_SUCCESS',
    payload: { payload },
});

export const fetchSeriesError = (err) => ({ 
  type: 'FETCH_SERIES_ERROR',
  payload: { err },
})

export const fetchSeries = (page) => (dispatch, getState) => {
  dispatch(fetchSeriesBegin());

  Api.getSeriesDataList(page).then( movies => {
    localStorage.setItem('pageListSeries', page);
    dispatch(fetchSeriesSuccess(movies));
  })
  .catch(error => dispatch(fetchSeriesError(error)));
};




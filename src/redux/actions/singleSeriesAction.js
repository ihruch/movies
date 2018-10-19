import Api from './../../api.js';
import { SINGLE_MOVIE } from '../constants/globals.js';
import {  FETCH_SINGLE_SERIES_SUCCESS } from '../constants/actionTypes.js';
import { fetchSeries } from './seriesListAction.js';



export const fetchSingleSeriesSuccess = (payload) => ({
    type: 'FETCH_SINGLE_SERIES_SUCCESS',
    payload: { payload },
});

export const fetchSingleSeries = (id) => (dispatch, getState) => {
  dispatch(fetchSeries(localStorage.getItem('pageListSeries')));
  dispatch(fetchSingleSeriesSuccess());
};




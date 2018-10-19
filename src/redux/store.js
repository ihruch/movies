import {createStore, combineReducers, applyMiddleware} from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import thunk from 'redux-thunk';

import moviesReducer from './reducers/moviesReducer.js';
import seriesReducer from './reducers/seriesReducer.js';
import sortingReducer from './reducers/sortingReducer.js';
import {history} from './../history.js';

const routerMid = routerMiddleware(history);
const middleware = [thunk, routerMid];

let rootReducer = combineReducers({
   dataMovies: moviesReducer,
   dataSeries: seriesReducer,
   routing: routerReducer,
   sorting: sortingReducer
})


var store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
);



export default store;


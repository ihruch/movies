import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store  from './redux/store.js';
import { ConnectedRouter } from "react-router-redux";
import { history } from './history.js';

import App from './App';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />   
    </ConnectedRouter>
  </Provider>  
  , document.getElementById('root')
);




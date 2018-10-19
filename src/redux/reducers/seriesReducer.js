
import { FETCH_SERIES_BEGIN, FETCH_SERIES_SUCCESS,  FETCH_SERIES_ERROR, 
  } from '../constants/actionTypes.js';
  
  let initState = {
    data: [],
    loading: false,
    error: null,
    entitis: {},
    ids: [],
  };
  
  export default (state = initState, action) => {
    
    switch (action.type) {
      case 'FETCH_SERIES_BEGIN': {
        return {
            ...state,
            data: [],     
            loading: true,
            error: null,
        }
      }

      case 'FETCH_SERIES_SUCCESS' : {
        const seriesArr = action.payload.payload;
        const entitis = {};
        seriesArr['results'].forEach( series => {
          entitis[series.id] = series;
      })
      const ids = Object.getOwnPropertyNames(entitis);

        return {
          ...state,
          loading: false,
          data: action.payload,
          entitis,
          ids,
          idPage: action.payload.payload.page
        }
      }


      case 'FETCH_SERIES_ERROR' : {
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      }

      default: 
        return state;
    }
  
  };
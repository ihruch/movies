
import { FETCH_MOVIES_BEGIN, FETCH_MOVIES_SUCCESS,  FETCH_MOVIES_ERROR, 
  } from '../constants/actionTypes.js';
  
  let initState = {
    data: [],
    loading: false,
    error: null,
    entitis: {},
    ids: [],
    idPage: ''
   
  };
  
  export default (state = initState, action) => {
    switch (action.type) {
      
      case 'FETCH_MOVIES_BEGIN': {
        return {
            ...state,
            data: [],     
            loading: true,
            error: null,
        }
      }

      case 'FETCH_MOVIES_SUCCESS' : {
    
        const moviesArr = action.payload.payload;
        const entitis = {};

        moviesArr['results'].forEach( movie => {
          entitis[movie.id] = movie;
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


      case 'FETCH_MOVIES_ERROR' : {
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
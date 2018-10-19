
 
import initialState from './../initialState';

export default function sortReducer(state = initialState, action){
    switch(action.type){
        case 'SORTING_DATA' : {
            const typeSort = action.payload;
            
            return {
                ...state,
                typeSort
            }
        }
        


        default: return state;
    }
      
  } 
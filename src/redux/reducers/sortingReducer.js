
import { SORTING_DATA, CLEAR_SORTING_DATA } from '../constants/actionTypes.js';

let initState = {
    typeSort: '' 
};

export default (state = initState, action) => {
  
    switch(action.type){
        case 'SORTING_DATA' : {
            const typeSort = action.payload;
            return {
                ...state,
                typeSort
            }
        }

        case 'CLEAR_SORTING_DATA' : {
            return {
                ...state,
                typeSort: {payload : ''}
            }
        }
        default: return state;
    }
  
  
 

};
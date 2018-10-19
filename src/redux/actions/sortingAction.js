import { SORTING_DATA, CLEAR_SORTING_DATA } from './../constants/actionTypes.js';


export const sortingData = (payload) => ({
    type: 'SORTING_DATA',
    payload: { payload },
});

export const clearSortingData = () => ({
  type: 'CLEAR_SORTING_DATA',
});


export const handleSortingData = (sort) => (dispatch, getState) => {
  dispatch(sortingData(sort));
};




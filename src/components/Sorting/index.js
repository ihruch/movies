import React from 'react'
import Select from 'react-select';
import './style.css';

const options = [
    { value: 'asc', label: 'Sort A to Z' },
    { value: 'desc', label: 'Sort Z to A' },
  ];

function Sorting({changeFunc, valState}) {
    return(
        <div className='movies-sorting-block inner-container'>
            <Select
                value={valState}
                onChange={changeFunc}
                options={options}
                className='movies-select'
                placeholder='Sort by name'
            />
        </div>
    )
}

export default Sorting;

import React, { Component } from 'react';
import './style.css';

class Spinner extends Component{
    render() {
        return (
            <div className='spinner'>
                <div className='spin'></div>
            </div>
        )
    }
    
}

export default Spinner;
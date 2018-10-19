import React, { Component } from 'react';
import SingleCard from './../SingleCard';

import { connect } from 'react-redux';
import { withRouter } from "react-router";

import { fetchSeries } from './../../redux/actions/seriesListAction.js';
import { handleSortingData, clearSortingData } from './../../redux/actions/sortingAction.js';
import Spinner  from './../Spinner';
import Sorting from './../Sorting';

import './style.css';

class SeriesListPage extends Component {
    constructor(props){
        super(props);
        this.handelNextBtn = this.handelNextBtn.bind(this);
        this.handelPrevBtn = this.handelPrevBtn.bind(this);
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
        
        this.state = {
            count: 1,
            loading: true,
            data: [],
            selectedOption: null
        }
        this.props.dispatch(fetchSeries(this.state.count));
    }

    componentWillReceiveProps(nextProps){
        this.setState({
          loading: nextProps.loading,
          data: nextProps.dataSeries
        });
    }
    componentWillUnmount(){
        this.props.dispatch( clearSortingData() );
    }

    handelNextBtn() {
        this.props.dispatch( fetchSeries(this.state.count + 1));
        this.setState({ count: this.state.count + 1 });
        window.scrollTo(0,0);
    }

    handelPrevBtn() {
        this.props.dispatch( fetchSeries(this.state.count - 1));
        this.setState({ count: this.state.count - 1 });
        window.scrollTo(0,0);
    }

    handleChangeSelect(selectedOption) {
        this.props.dispatch( handleSortingData(selectedOption.value));
        this.setState({ selectedOption });
    }

    handleMoveToSingleCard(id) {  
        this.props.history.push(`/tv-show/${id}`);
    }

    render() {
        const {loading, count, data, selectedOption} = this.state;
        const templateImg = `https://image.tmdb.org/t/p/w185_and_h278_face`; 
        
        return (
            <div style={{paddingTop: '10vh'}} className='inner-conrainer'> 
           
                <Sorting changeFunc={this.handleChangeSelect} onChange={this.state.selectedOption} />
                <div className='movies-wrapper'>

                { loading  &&  <Spinner />}

                <div className='paiging-btn'>
                    <div className='paiging-btn-group'>
                        <button 
                            onClick={this.handelPrevBtn}
                            disabled= {!(this.state.count - 1)}
                            
                            > 
                                <i className="material-icons">navigate_before</i>
                        </button>
                        <button 
                            onClick={this.handelNextBtn}
                            disabled={false}
                            >
                                <i className="material-icons">navigate_next</i>
                        </button>
                    </div>
                 </div>
                    <div className='list-container inner-container'>
                            {!loading && data.map( series => {
                                return <SingleCard 
                                key={series.id}
                                id={series.id} 
                                dateRelease={series.first_air_date  } 
                                title={series.name}
                                description={series.overview}
                                img={templateImg + series.poster_path} 
                                func={this.handleMoveToSingleCard.bind(this, series.id)}
                                /> 
                                })
                            }
                    </div>
                </div>    
            </div>
        
        )
            
    }
}

const setStatetoProps = (state) => {
  
        let newdataSeries = state.dataSeries.ids.map( id => { return state.dataSeries.entitis[id]});
        switch(state.sorting.typeSort.payload) {
            case "asc" :{
                        return {
                            dataSeries: newdataSeries.sort( (a,b) => {return (a.title > b.title)? 1 : -1 }),
                            loading: state.dataSeries.loading
                        } 
                    }
            case "desc" :{
                        return {
                            dataSeries: newdataSeries.sort( (a,b) => {return (a.title > b.title)? -1 : 1 }),
                            loading: state.dataSeries.loading
                        } 
                    }
            default:   return {
                            dataSeries: newdataSeries,
                            loading: state.dataSeries.loading
                        };
        }
    }

export default connect(setStatetoProps)(SeriesListPage)
 

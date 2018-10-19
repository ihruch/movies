import React, {Component} from 'react';
import SingleCard from './../SingleCard';

import {connect} from 'react-redux';
import { withRouter } from "react-router";

import { fetchMovies } from './../../redux/actions/moviesListAction.js';
import { handleSortingData, clearSortingData } from './../../redux/actions/sortingAction.js';
import Spinner  from './../Spinner';
import Sorting from './../Sorting';

import './style.css';

class MovieListPage extends Component {
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
        this.props.dispatch(fetchMovies(this.state.count));
    }

    componentWillMount(){
         this.props.dispatch(fetchMovies(this.state.count));
    } 

    componentWillUnmount(){
        this.props.dispatch( clearSortingData() );
    }

    componentWillReceiveProps(nextProps){
        this.setState({
          loading: nextProps.loading,
          data: nextProps.dataMovies
        });
    }

    handelNextBtn() {
        this.props.dispatch( fetchMovies(this.state.count + 1));
        this.setState({ count: this.state.count + 1 });
        window.scrollTo(0,0);
    }

    handelPrevBtn() {
        this.props.dispatch( fetchMovies(this.state.count - 1));
        this.setState({ count: this.state.count - 1 });
        window.scrollTo(0,0);
    }

    handleChangeSelect(selectedOption){
        this.props.dispatch( handleSortingData(selectedOption.value));
        this.setState({ selectedOption });
    }

    handleMoveToSingleCard(id){
        this.props.history.push(`/movie/${id}`);
    }

    render() {
        const {loading, count, data, selectedOption} = this.state;
        const templateImg = `https://image.tmdb.org/t/p/w185_and_h278_face`; 
        
        return (
            <div style={{paddingTop: '10vh'}} className='inner-container'> 
           
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
                            {!loading && data.map( movie => {
                                return <SingleCard 
                                key={movie.id}
                                id={movie.id} 
                                dateRelease={movie.release_date} 
                                title={movie.title}
                                description={movie.overview}
                                img={templateImg + movie.poster_path} 
                                func={this.handleMoveToSingleCard.bind(this, movie.id)}
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
        let newDataMovies = state.dataMovies.ids.map( id => { return state.dataMovies.entitis[id]});
        switch(state.sorting.typeSort.payload) {
            case "asc" :{
                        return {
                            dataMovies: newDataMovies.sort( (a,b) => {return (a.title > b.title)? 1 : -1 }),
                            loading: state.dataMovies.loading
                        } 
                    }
            case "desc" :{
                        return {
                            dataMovies: newDataMovies.sort( (a,b) => {return (a.title > b.title)? -1 : 1 }),
                            loading: state.dataMovies.loading
                        } 
                    }
            default:   return {
                            dataMovies: newDataMovies,
                            loading: state.dataMovies.loading
                        };
        }
    }

export default connect(setStatetoProps)(MovieListPage)
 

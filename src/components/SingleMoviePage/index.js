import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, Link, Redirect} from 'react-router-dom';

import Spinner from './../Spinner';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Header from './../Header';
import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';
import './style.css';
import { fetchSingleMovie } from './../../redux/actions/singleMovieAction.js';

class SingleCardPageMovie extends Component {
    constructor() {
        super();
        this.handleBack = this.handleBack.bind(this);
        this.state ={
            id: null,
            loading: true
        }
        
    }
    componentWillMount(){
        this.props.dispatch( fetchSingleMovie(this.props.match.params.id) );
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            loading: nextProps.loading,
        });
    }
   
    handleBack() {
        this.props.history.push("/movies");
       
    }

    render() {
        const Div = styled.div`
            position: relative;
            z-index: 1;
            : after {
                content: '';
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: -1;

                background-size: cover;
                background-position: 50% 50%;
                background-repeat: no-repeat;
                
                background-image: url(${props => props.bgi });
                filter: opacity(100) grayscale(100%) contrast(130%);
            }`;

        console.log('singleMovie', this.props.singleMovie)
        let imgFace = `https://image.tmdb.org/t/p/w300_and_h450_face`;
        let imgBG = 'https://image.tmdb.org/t/p/w1400_and_h450_face/';

        const {loading, id} = this.state;

       
        return (
            <section style={{paddingTop: '10vh'}}> 
                { loading  &&  <Spinner /> }
                { !loading && 
                    <Div  bgi ={imgBG + this.props.singleMovie.backdrop_path}>
                        <div className='bg-customer'>
                            <div className='content-container' >
                                <Card className='smp-card'>
                                    <div className='smp-card-wrapper'>
                                        <CardMedia
                                            className='smp-card-media'
                                            image={imgFace + this.props.singleMovie.poster_path}
                                            title="Live from space album cover"
                                        />
                                        
                                        <CardContent className='smp-card-content'>
                                            <div className='smp-card-title'>
                                                <Typography component="h1" variant="title" >
                                                    {this.props.singleMovie.title}
                                                </Typography>
                                                <Typography component="span" variant="subtitle1"  >
                                                    ({this.props.singleMovie.release_date})
                                                </Typography>
                                            </div>

                                            <div className='smp-card-descr'>
                                                <Typography component="p" >
                                                    {this.props.singleMovie.overview}
                                                </Typography>
                                            </div>

                                            <IconButton 
                                                aria-label="arrow_back" 
                                                onClick={this.handleBack}
                                                className='smp-btn-back'
                                                >
                                                <i className="material-icons"> arrow_back </i>
                                            </IconButton>
                                        </CardContent>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </Div>
                        
                }
              

            </section>  
            );
    }// render

}//end class


function mapStateToProps(state, props){
    // console.log("state single movie", state )
    // console.log('props single movie', props)
  
    const id = props.match.params.id;
    return {
        singleMovie: state.dataMovies.entitis[id],
        loading: state.dataMovies.loading
    }
}
 
export default withRouter(connect(mapStateToProps)(SingleCardPageMovie))
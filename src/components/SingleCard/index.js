import React, {Component} from 'react';
import { withRouter} from "react-router-dom";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

import './style.css';
class SingleCard  extends Component {
    
    render() {
        return(
            <Card className='single-card-main'>
        
                <CardMedia
                    className='single-card-img'
                    image={this.props.img}
                    title={this.props.title}
                    />
                <div className='single-card-info-block'>
                    <CardContent className='single-card-content'>
                        <Typography variant="headline" component="h2">
                        {this.props.title}
                        
                        </Typography>
                        <Typography  color="textSecondary">
                            {this.props.dateRelease}
                        </Typography>

                        <Typography component="p">
                            {this.props.description.slice(0, 120)}
                        <br />
                        </Typography>
                    </CardContent>

                    <CardActions className='single-card-action'>
                        <Button 
                            size="small"
                            onClick={this.props.func}
                            >
                            More
                        </Button>
                    </CardActions>
                </div>
       
            </Card>  
        
        )
    }
}//
export default SingleCard;

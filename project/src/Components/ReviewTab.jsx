import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { withRouter } from "react-router-dom";
import Movie from './Movie';

class ReviewTab extends React.Component{
    render(){
        const movieInfo = this.props.location.state.movieInfo;
        return (
            <div className = "App">
                <header className = "App-header">
                    <Movie movieInfo={movieInfo} clickable={false}/>
                </header>
            </div>
           )
    }
}

export default withRouter(ReviewTab)
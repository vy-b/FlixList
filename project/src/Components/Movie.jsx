import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Movie.css'
import "./ReviewTab"
import { withRouter } from "react-router-dom";

class Movie extends React.Component {

    onMovieClick = () => {
        this.props.history.push({
            pathname:"/Review",
            state: {movieInfo: this.props.movieInfo}
        })
    }

    render() {
        const {title, poster, year,plot,rated,runtime,genre,actors} = this.props.movieInfo;
        const clickable = this.props.clickable;
        return (
        <div className= {`card ${clickable ? "movie-card" : undefined}`}>
            <div className={`card-block stretched-link text-decoration ${clickable ? "clickable-card" : undefined}`} onClick={clickable ? this.onMovieClick : undefined}>
                <div className="row no-gutters">
                    <div className="col-auto">
                    <div className="card-block px-2">
                        <img className="poster" src={poster} alt="movie cover"/> 
                    </div>
                    </div>
                    <div className="col">
                        <div className="card-block px-2">
                            <h1 className="title">{title}</h1>
                            <h5 className="text-muted"><span className="year">{year}</span> | <span className="rated">{rated}</span></h5>
                            <p className="plot" >{plot}</p>
                            <p><span className="font-weight-bold">Cast: </span><span className="cast"><span id="other" >{actors}</span></span></p>
                            <p><span className="font-weight-bold">Runtime: </span><span id="other" className="runtime">{runtime}</span></p>
                            <p id="other" className="genre">{genre}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       )
   }
}
export default withRouter(Movie);
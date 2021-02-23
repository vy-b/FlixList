import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Movie.css'
class Movie extends React.Component {
   render() {
       const {title, poster, year,plot,rated,runtime,genre,actors} = this.props;
       return (
        <div className="card"style={{width: '1000px'}}>
        <div className="row no-gutters">
            <div className="col-auto">
            <div className="card-block px-2">
                <img src={poster} alt="movie cover"/> 
                </div>
            </div>
            <div className="col">
                <div className="card-block px-2">
                    <h1 >{title}</h1>
                    <h5 className="text-muted" >{year} | {rated}</h5>
                    <p>{plot}</p>
                    <p><span className="font-weight-bold">Cast: </span>{actors}</p>
                    <p><span className="font-weight-bold">Runtime: </span>{runtime}</p>
                    <p><span className="font-weight-bold">Genre: </span>{genre}</p>
                </div>
            </div>
        </div>
        </div>
        
       )
   }
}
export default Movie;
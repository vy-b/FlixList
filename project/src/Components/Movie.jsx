import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Movie.css'
class Movie extends React.Component {
   render() {
       const {title, poster, year,plot,rated,runtime,genre,actors} = this.props;
       return (
        <div className="card">
        <a class="card-block stretched-link text-decoration-none" href="#Review">
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
                        <p id="other" className="cast"><span className="font-weight-bold">Cast: </span>{actors}</p>
                        <p id="other"><span className="font-weight-bold">Runtime: </span>{runtime}</p>
                        <p id="other"><span className="font-weight-bold">Genre: </span>{genre}</p>
                    </div>
                </div>
            </div>
        </a>
        </div>
        
       )
   }
}
export default Movie;
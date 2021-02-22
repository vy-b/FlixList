import React from 'react';

class Movie extends React.Component {
   render() {
       const {title, poster, year,plot,rated,runtime,genre,actors} = this.props;
       return (
        <div className="App">
            <header className="App-header">
            <div >
                <h1 >{title}</h1>
                <h2 >{year}</h2>
                <h3 >{plot}</h3>
                <h3 >Rated: {rated}</h3>
                <h3 >Runtime: {runtime}</h3>
                <h3 >Genre: {genre}</h3>
                <h3 >Cast: {actors}</h3>
            </div>
            <div >
                <img src={poster} alt="movie cover"/>
            </div>
            </header>
        </div>
       )
   }
}
export default Movie;
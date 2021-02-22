import React from 'react';
import './SignUp/SignUp.css'
class Movie extends React.Component {
   render() {
       const {title, poster, year,plot, error,rated,runtime,genre,actors} = this.props;
       return (
           
           <div>
              {
                  error===''
                  ? <div className="App">
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
                  : <div>
                      <div className="error">{error}</div>
                    </div>
              }
           </div>

       )
   }
}
export default Movie;
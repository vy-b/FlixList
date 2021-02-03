import axios from 'axios';
import React from 'react';
import Movie from "./Movie.jsx";
import Search from "./Search.jsx";

class MovieAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };
}

sendRequest=(title)=>{
    axios.get("http://localhost:3001/testAPI",{params: {title: title}})
    .then(res => {const movies = res.data;
    this.setState({movies});})
}

  render() {
      return(
          <div className = "App">
            {/* <p className="App-intro">{this.state.apiResponse}</p> */}
              <header className="App-header">
              {
              this.state.movies.map((movie) => {
              return <Movie {...movie}/>
              })
              }
              <Search onRequest={this.sendRequest}/>
              </header>
          </div>
      )
  }
}

export default MovieAPI
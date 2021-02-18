import axios from 'axios';
import React from 'react';
import Movie from "./Movie.jsx";
import SearchView from "./SearchView.jsx";

class SearchController extends React.Component {
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
              <header className="App-header">
              <SearchView onRequest={this.sendRequest}/>
              {
              this.state.movies.map((movie) => {
              return <Movie {...movie}/>
              })
              }
              </header>
          </div>
      )
  }
}

export default SearchController

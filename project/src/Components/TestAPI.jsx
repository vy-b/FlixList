import React from 'react';
import axios from 'axios';
import Movie from "./Movie.jsx";
import Search from "./Search.jsx";


class TestAPI extends React.Component {
  state = {
    movies: []
  }
  sendRequest = (title) => {
    axios({
      method: 'GET',
      url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
      params: {s: title, page: '1', r: 'json'},
      headers: {
        'x-rapidapi-key': '16721c88c9msh639b77d27c7427cp1bc563jsnd47d06966083',
        'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com'
      }
    }).then(res => {
      if (res.error) throw new Error(res.error);
      const movies = res.data.Search;
      this.setState({movies});
    })
     
    
  }

  render() {
      return(
          <div className = "App">
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

export default TestAPI
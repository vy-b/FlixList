import axios from 'axios';
import React from 'react';
import { getSearchResults, getMovieDetails } from '../Utils/Utils.jsx';
import Movie from "./Movie.jsx";
import SearchView from "./SearchView.jsx";

class SearchController extends React.Component {
    constructor(props) {
        super(props);
        this.state = { movies: [] };
    }

    sendRequest=(title)=>{
        getSearchResults(title).then(movies => this.setState({movies: movies}, () => {
            this.state.movies.forEach( movie => {
                getMovieDetails(movie.imdbID).then( details => console.log(details));
            });
        }));
    }

    render() {
        return(
            <div className = "App">
                <header className="App-header">
                <SearchView onRequest={this.sendRequest}/>
                {
                this.state.movies.map((movie, i) => {
                return <Movie {...movie} key={i}/>
                })
                }
                </header>
            </div>
        )
    }
}

export default SearchController

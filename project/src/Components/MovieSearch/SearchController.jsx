import React from 'react';
import { getSearchResults, getMovieDetails } from '../../Utils/Utils.jsx';
import Movie from "../Movie.jsx";
import SearchView from "./SearchView.jsx";

class SearchController extends React.Component {
    constructor(props) {
        super(props);
        this.state = { movies: [], error: '' };
    }

    sendRequest=(title)=>{
        if (title.length < 3){
            this.setState({error:'Please enter 3 characters or more'})
            return null;
        }
        else{
        getSearchResults(title).then(movies => {
            if(!movies)
            {
                this.setState({error:'Movie not found'})
                return null;
            }
            else{
                this.setState({movies:[], error:''})
                movies.forEach( movie => {
                getMovieDetails(movie.imdbID).then( details => {
                    this.setState({ movies: [...this.state.movies, details] })
                });
                
        })
        }
    });
    }
}

    render() {
        return(
            <div className = "App">
                <header className="App-header">
                    <SearchView onRequest={this.sendRequest} error={this.state.error}/>
                    {this.state.movies.map((movie, i) => {
                        return <Movie movieInfo={movie} clickable={true} key={i}/>
                    })}
                </header>
            </div>
        )
    }
}

export default SearchController

import React from 'react';
import { getSearchResults, getMovieDetails } from '../Utils/Utils.jsx';
import Movie from "./Movie.jsx";
import SearchView from "./SearchView.jsx";

class SearchController extends React.Component {
    constructor(props) {
        super(props);
        this.state = { movies: [], error: '' };
    }

    sendRequest=(title)=>{
        if (title.length < 3){
            this.setState({error:'Please enter 3 characters or more'})
        }
        else{
        getSearchResults(title).then(movies => {
            if(!movies)
            {
                this.setState({error:'Movie not found'})
            }
            else{
                this.setState({error:''})
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
        let Err;
        this.state.error !== ''
        ? Err = <Movie error={this.state.error}/>
        : Err = false;
        return(
            <div className = "App">
                <header className="App-header">
                <SearchView onRequest={this.sendRequest}/>
                {
                Err === false
                ? this.state.movies.map((movie, i) => {
                return <Movie {...movie} error={this.state.error} key={i}/>
                })
                : Err
                }
                </header>
            </div>
        )
    }
}

export default SearchController

import axios from 'axios';
import MovieTableEntry from '../Objects/MovieTableEntry';
import RatingTableEntry from '../Objects/RatingTableEntry';

function addFriend(friendTableEntry){
    return new Promise((resolve, reject) => {
        if (friendTableEntry.username.trim() === friendTableEntry.friendUsername.trim()){
            reject(`You cannot follow yourself`);
        }
        else if(friendTableEntry.friendUsername.trim() === ''){
            reject(`Please enter a valid username`);
        }
        else{
            getUser(friendTableEntry.friendUsername.trim()).then((response) => {
                if (response.data === null){
                    reject(`User '${friendTableEntry.friendUsername}' does not exist`);
                }
                else{
                    getFriends(friendTableEntry.username.trim()).then((response) => {
                        if (response.includes(friendTableEntry.friendUsername.trim())){
                            reject(`You are already following ${friendTableEntry.friendUsername}`);
                        }
                        else{
                            axios.post('http://localhost:3001/addFriend', friendTableEntry).then( (response) => {
                                if(response.status === 200){
                                    resolve(response);
                                }
                                else{
                                    reject(response);
                                }
                            });
                        }
                    })
                }
            })
        }
        
    })
}

// Returns an array of the friend usernames.
function getFriends(username){
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:3001/getFriends', {params: {username: username}}).then( (response) => {
            if(response.status === 200){
                resolve(response.data.map( result => result.friendUsername ).sort((a, b) => a.toLowerCase() < b.toLowerCase() ? -1 : 1));
            }else{
                reject(response);
            }    
        });
    }).catch(err => console.log(err));
}

// Adds the rating, or updates it if a rating already exists for that username and movieId.
function addRating(ratingTableEntry){
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:3001/addRating', ratingTableEntry).then( (response) => {
            if(response.status === 200){
                resolve(response);
            }else{
                reject(response);
            }
        });
    }).catch(err => console.log(err));
}

/*
imdbID: The rapidapi id of the targeted movie. If undefined, returns ratings for all movies.
usernameList: The array of usernames of the users who wrote the reviews. 

Returns a list of RatingTableEntry objects, sorted by date (most recent first).
*/
function getRatings(imdbID, usernameList){
    const searchParamaters = {
        imdbID: imdbID,
        usernameList: usernameList
    }
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:3001/getRatings', {params: searchParamaters}).then( (response) => {
            if(response.status === 200){
                let results = response.data.map(result => {
                    return new RatingTableEntry(result.imdbID, result.username, result.rating.stars, result.rating.review, result.date);
                })
                results.sort((entry1, entry2) => ('' + entry2.date).localeCompare(entry1.date));
                resolve(results);
            }else{
                reject(response);
            }
        });
    }).catch(err => console.log(err));
}


// Returns user
function getUser(username){
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:3001/getUser', {params: {username: username}}).then( (response) => {
            if(response.status === 200){
                resolve(response);
            }else{
                reject(response);
            }
        });
    }).catch(err => console.log(err));
}

// Returns the movie results from the search query.
function getSearchResults(movieTitle){
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:3001/getSearchResults', {params: {title: movieTitle}}).then( (response) => {
            if(response.status === 200){
                resolve(response.data);
            }else{
                reject(response);
            }
        });
    }).catch(err => console.log(err));
}

// Returns a MovieTableEntry object.
function getMovieDetails(imdbID){
    return new Promise((resolve, reject) => {
        // First search our own movie table in mongoDB
        axios.get('http://localhost:3001/getTableMovieDetails', {params: {imdbID: imdbID}}).then( (response) => {
            if(response.status === 200 && response.data){
                resolve(response.data);
            }else{
                // If can't find in mongoDB, get from rapidApi
                axios.get('http://localhost:3001/getRapidApiMovieDetails', {params: {imdbID: imdbID}}).then( (response) => {
                    if(response.status === 200 && response.data){
                        const {imdbID, Title, Plot, Poster, Rated, Year, Runtime, Genre, Actors} = response.data;
                        const movieTableEntry = new MovieTableEntry(imdbID, Title, Plot, Poster, Rated, Year, Runtime, Genre, Actors, 0, 0);
                        // Add result to mongoDB for next time.
                        axios.post('http://localhost:3001/addMovieDetails', movieTableEntry).catch( err => console.log(err));
                        resolve(movieTableEntry);
                    }else{
                        reject(response);
                    }
                }).catch(err => reject(err));
            }
        }).catch(err => reject(err));
    }).catch(err => console.log(err));
}

export {addFriend, getFriends, getUser, addRating, getRatings, getSearchResults, getMovieDetails}
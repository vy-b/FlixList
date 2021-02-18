import axios from 'axios';
import RatingTableEntry from '../Objects/RatingTableEntry';

function addFriend(friendTableEntry){
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:3001/addFriend', friendTableEntry).then( (response) => {
            if(response.status === 200){
                resolve(response);
            }else{
                reject(response);
            }
        });
    }).catch(err => console.log(err));
}

// Returns an array of the friend usernames.
function getFriends(username){
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:3001/getFriends', {params: {username: username}}).then( (response) => {
            if(response.status === 200){
                resolve(response.data.map(result => result.friendUsername));
            }else{
                reject(response);
            }    
        });
    }).catch(err => console.log(err));
}

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
movieId: The rapidapi id of the targeted movie.
usernameList: The array of usernames of the users who wrote the reviews. 

Returns a list of RatingTableEntry objects.
*/
function getRatings(movieId, usernameList){
    const searchParamaters = {
        movieId: movieId,
        usernameList: usernameList
    }
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:3001/getRatings', {params: searchParamaters}).then( (response) => {
            if(response.status === 200){
                resolve(response.data.map(result => {
                    return new RatingTableEntry(result.movieId, result.username, result.rating.stars, result.rating.review);
                }));
            }else{
                reject(response);
            }
        });
    }).catch(err => console.log(err));
}

export {addFriend, getFriends, addRating, getRatings}

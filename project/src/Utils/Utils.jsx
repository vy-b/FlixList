import axios from 'axios';

function addFriend(friendTableEntry){
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:3001/addFriend', friendTableEntry).then( (response) => {
            if(response.status === 200){
                resolve(response);
            }else{
                reject(response);
            }
        }).catch( err => {
            reject(err);
        });
    });
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
        }).catch( err => {
            reject(err);
        });
    });
}

function addRating(ratingTableEntry){
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:3001/addRating', ratingTableEntry).then( (response) => {
            if(response.status === 200){
                resolve(response);
            }else{
                reject(response);
            }
        }).catch( err => {
            reject(err);
        });
    });
}

export {addFriend, getFriends, addRating}

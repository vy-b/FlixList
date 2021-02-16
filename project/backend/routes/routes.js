const express = require('express');
const router = express.Router();
const signupTemplateCopy = require('../models/signup.js');
const friendTableEntry = require('../models/FriendTableEntry');
const ratingTableEntry = require('../models/RatingTableEntry');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

router.post('/signup', (request, response) => {
    const signupUser = new signupTemplateCopy({
        username: request.body.username,
        password: request.body.password
    })
    signupUser.save().then(data => {
        response.json(data);
    }).catch( error => {
        response.json(error);
    });
});

router.post('/addFriend', (request, response) => {
    const friendEntry = new friendTableEntry({
        username: request.body.username,
        friendUsername: request.body.friendUsername
    })
    friendEntry.save().then(data => {
        response.json(data);
    }).catch( error => {
        response.json(error);
    });
})

router.get('/getFriends', (req, res, next) => {
    friendTableEntry.find({username: req.query.username}).exec().then(doc => {
        res.json(doc)
    }).catch( err => console.log(err));
})

router.post('/addRating', (request, response) => {
    const ratingEntry = new ratingTableEntry({
        movieId: request.body.movieId,
        username: request.body.username,
        rating: request.body.rating
    })
    ratingEntry.save().then(data => {
        response.json(data);
    }).catch( error => {
        response.json(error);
    });
})

router.get('/testAPI', function(req, res, next) {
    const target = req.query.title;
    axios.request({
      method: 'GET',
      url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
      params: {s: target, page: '1', r: 'json'},
      headers: {
        'x-rapidapi-key': process.env.API_KEY,
        'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com'
      }
    }).then(movie=> {
    	res.json(movie.data.Search);
    }).catch(function (error) {
    	console.error(error);
    });
});

module.exports = router;
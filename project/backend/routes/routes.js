const express = require('express');
const router = express.Router();
const userTableEntry = require('../models/UserTableEntry.js');
const friendTableEntry = require('../models/FriendTableEntry');
const ratingTableEntry = require('../models/RatingTableEntry');
const axios = require('axios');
const dotenv = require('dotenv');
const movieTableEntry = require('../models/MovieTableEntry.js');
const { response } = require('express');
dotenv.config();

router.post('/addUser', (request, response) => {
    const user = new userTableEntry({
        username: request.body.username,
        password: request.body.password
    })
    user.save().then(data => {
        response.json(data);
    }).catch( error => {
        response.json(error);
    });
});

router.get('/getUser', (req, res, next) =>{
    userTableEntry.findOne({username: req.query.username}).exec().then(doc => {
        res.json(doc)
    }).catch( err => console.log(err));
})

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
    }).catch( err => res.json(err));
})

router.post('/addRating', (request, response) => {
    const {movieId, username, rating} = request.body;
    const ratingEntry = new ratingTableEntry({
        movieId: movieId,
        username: username,
        rating: rating
    })
    ratingTableEntry.findOneAndUpdate({movieId: movieId, username: username}, ratingEntry, {upsert: true}).exec().then(doc => {
        res.json(doc)
    }).catch( err => res.json(err));
})

router.get('/getRatings', (req, res, next) => {
    ratingTableEntry.find({movieId: req.query.movieId, username: {$in: req.query.usernameList}}).exec().then(doc => {
        res.json(doc)
    }).catch( err => res.json(err));
})

router.get('/getSearchResults', function(req, res, next) {
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

router.get('/getRapidApiMovieDetails', function(req, res, next) {
    const target = req.query.imdbID;
    axios.request({
      method: 'GET',
      url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
      params: {i: target, r: 'json'},
      headers: {
        'x-rapidapi-key': process.env.API_KEY,
        'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com'
      }
    }).then(movie=> {
    	res.json(movie.data);
    }).catch(function (error) {
    	console.error(error);
    });
});

router.get('/getTableMovieDetails', function(req, res, next) {
    movieTableEntry.findOne({imdbID: req.query.imdbID}).exec().then( doc => {
        res.json(doc);
    }).catch(err => res.json(err));
});

router.post('/addMovieDetails', (request, response) => {
    const {imdbID, title, plot, poster, rated, year, runtime, genre, actors} = request.body;
    const movieEntry = new movieTableEntry({
        imdbID: imdbID,
        title: title,
        plot: plot,
        poster: poster,
        rated: rated,
        year: year,
        runtime: runtime,
        genre: genre,
        actors: actors
    })
    movieEntry.save().then(data => {
        response.json(data);
    }).catch( error => {
        response.json(error);
    });
})

module.exports = router;
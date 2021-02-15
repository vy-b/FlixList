const express = require('express');
const router = express.Router();
const axios = require('axios')
const dotenv = require('dotenv');
dotenv.config();

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
const mongoose = require('mongoose');

const rating = new mongoose.Schema({
    stars: {
        type: Number,
        require: true
    },
    review: {
        type: String,
        requrie: false
    }
})

const ratingTableEntry = new mongoose.Schema({
    movieId: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    rating: {
        type: rating,
        require: true
    }
})

module.exports = mongoose.model('Ratings', ratingTableEntry);

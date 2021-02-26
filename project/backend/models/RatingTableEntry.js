const mongoose = require('mongoose');

const rating = new mongoose.Schema({
    stars: {
        type: Number,
        required: true
    },
    review: {
        type: String,
        requried: false
    }
})

const ratingTableEntry = new mongoose.Schema({
    movieId: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    rating: {
        type: rating,
        required: true
    }
})

module.exports = mongoose.model('Ratings', ratingTableEntry);
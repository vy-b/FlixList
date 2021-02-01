const mongoose = require('mongoose');

const signupTemplate = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('signup', signupTemplate);

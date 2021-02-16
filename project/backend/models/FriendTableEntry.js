const mongoose = require('mongoose');

const friendTableEntry = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    friendUsername: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Friends', friendTableEntry);

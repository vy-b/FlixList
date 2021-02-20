const mongoose = require('mongoose');

const userTableEntry = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})


module.exports = mongoose.model('Users', userTableEntry);

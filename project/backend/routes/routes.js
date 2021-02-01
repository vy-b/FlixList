const express = require('express');
const router = express.Router();
const signupTemplateCopy = require('../models/signup.js')

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
})

module.exports = router;
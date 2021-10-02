const mongoose = require('mongoose');
require('../utils/database');

const Hello = mongoose.model('hello', {
    profession: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    image: String
});

module.exports = Hello;
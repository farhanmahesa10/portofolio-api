const mongoose = require('mongoose');
require('../utils/database');

const Hello = mongoose.model('project', {
    projectName: {
        type: String,
        required: true
    },
    periode: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    image: String
});

module.exports = Hello;
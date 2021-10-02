const mongoose = require('mongoose');
require('../utils/database');
const Experience = mongoose.model('experience', {
    profession: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = Experience;
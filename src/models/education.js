const mongoose = require('mongoose');
require('../utils/database');

const Education = mongoose.model('education', {
    schoolName: {
        type: String,
        required: true
    },
    schoolLevel: {
        type: String,
        required: true
    },
    periode: {
        type: String,
        required: true
    },

});

module.exports = Education;
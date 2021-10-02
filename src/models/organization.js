const mongoose = require('mongoose');
require('../utils/database');

const Organization = mongoose.model('organization', {
    name: {
        type: String,
        required: true
    },
    periode: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },

});

module.exports = Organization;
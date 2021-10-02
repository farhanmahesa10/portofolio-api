const mongoose = require('mongoose');
require('../utils/database');
const Workscore = mongoose.model('workskill', {
    name: {
        type: String,
        required: true
    },
    score: {
        type: String,
        required: true
    },

})

module.exports = Workscore;
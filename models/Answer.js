const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
    answers: {
        type: [String],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Answer', AnswerSchema);

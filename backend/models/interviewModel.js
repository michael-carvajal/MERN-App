const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const interviewSchema = new Schema({
    interviewer: {
        type: String,
        required: true,
    },
    authorId: {
        type: Number,
        required: true,
    },
    interviewee: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date
    }

})

module.exports = mongoose.model('Interview', interviewSchema)

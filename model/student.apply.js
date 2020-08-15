const mongoose = require('mongoose')

const { Schema } = mongoose

const newStudent = new Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = student = mongoose.model('students', newStudent)


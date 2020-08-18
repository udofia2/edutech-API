const mongoose = require("mongoose");
const crypto = require("crypto");

const { Schema } = mongoose;

const newStudent = new Schema({
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  studentID: String,
  CreatedAt: {
    type: Date,
    default: Date.now(),
  },
  gender: {
    type: String,
  },
  age: {
    type: Number,
  },
  DOB: {
    type: String,
  },
  classes: {
    type: String,
  },
  parentEmail: {
    type: String,
    required: true
  },
  Admitted: {
    type: Boolean
  }
});

module.exports = student = mongoose.model("students", newStudent);

const mongoose = require("mongoose");

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
  CreatedAt: {
      type: Date,
      default: Date.now()
  }
});

module.exports = student = mongoose.model("students", newStudent);

const mongoose = require("mongoose");

const { Schema } = mongoose;

const parentSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  parentID: String,
  CreatedAt: {
    type: Date,
    default: Date.now(),
  },
  ward: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "student"
  }
});

module.exports = student = mongoose.model("students", newStudent);

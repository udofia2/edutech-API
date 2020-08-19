const mongoose = require("mongoose");

const { Schema } = mongoose;

const guardianSchema = new Schema({
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
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'students'
  }
});

module.exports = guardains = mongoose.model("guardians", guardianSchema);

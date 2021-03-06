const mongoose = require("mongoose");
const { Schema } = mongoose;

const  adminSchema = new Schema({
  name: {
    type: String,
    required: true,
    default: "Admin",
  },
  password: {
    type: String,
    required: true,
    default: "admin",
  },
  email: {
    type: String,
    default: 'admin@login.com'
  },
  parents: {
    type: Schema.Types.ObjectId,
    ref: "guardians",
  },
  students: {
    type: Schema.Types.ObjectId,
    ref: "guardians",
  },
});

module.exports = Admin = mongoose.model("admins", adminSchema);

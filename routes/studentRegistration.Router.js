const express = require("express");
const bcrypt = require("bcrypt");
const Students = require("./../model/student.apply");
const { body, validationResult } = require("express-validator");
const { createStudent, getStudents } = require('./../controller/student.Registration.Controller')(validationResult, Students)
const { regFormValidation } = require("./../middleware/formValidation")(body);

const { Router } = express;

const studentRegistration = Router();

studentRegistration.route("/all/students").get(getStudents);

studentRegistration
  .route("/new/student")
  .post(regFormValidation, createStudent);

module.exports = studentRegistration;

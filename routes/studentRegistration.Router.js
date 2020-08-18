const express = require("express");
const { v4: uuidv4 } = require('uuid');
const bcrypt = require("bcrypt");
const Students = require("./../model/student.apply");
const { body, validationResult } = require("express-validator");
const { createStudent, getStudents, loginStudent } = require('./../controller/student.Registration.Controller')(validationResult, Students, uuidv4, bcrypt)
const { regFormValidation, loginFormValidation } = require("./../middleware/formValidation")(body);
const { auth } = require("./../middleware/auth");
const { Router } = express;

const studentRoutes = Router();

studentRoutes.route("/students").get(getStudents);

studentRoutes
  .route("/student/new")
  .post(regFormValidation, createStudent);

  studentRoutes.route('/student/login').post(loginFormValidation, auth, loginStudent)

module.exports = studentRoutes;

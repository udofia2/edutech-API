const express = require("express");
const {body, validationResult } = require('express-validator')
const { teacherloginFormValidation} = require('./../middleware/formValidation')(body)
const bcrypt = require("bcrypt");
const Teachers = require('./../model/teacher.model')
const { createTeacher, loginTeacher, teachers } = require("./../controller/teachers.Controller")(
  Teachers,
  bcrypt,
  validationResult
);
const { Router } = express;

const teacherRouter = Router();

teacherRouter.route('/teachers').get(teachers)

teacherRouter.route("/new/teacher").post(createTeacher);

teacherRouter.route('/teacher/login').post(teacherloginFormValidation, loginTeacher)

//  CONTINUE WITH LOGIN TEACHER

module.exports = teacherRouter;

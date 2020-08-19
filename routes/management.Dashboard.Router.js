const Students = require("./../model/student.model");
const Guardains = require("./../model/guardian.model");
const Teacher = require("./../model/teacher.model");
const { students } = require('./../controller/management.Dashboard.Controller')(Teacher, Students, Guardains)
const express = require("express");

const { Router } = express;

const managementDashboard = Router();

managementDashboard.route("/management/dashboard").get(students);

module.exports = managementDashboard

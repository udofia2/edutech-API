const Guardian = require("./../model/guardian.model");
const { guardians, guardian } = require("./../controller/guardian.Controller")(
  Guardian
);
const express = require("express");
const { Router } = express;

const guardianRouter = Router();

guardianRouter.route("/guardians").get(guardians);

guardianRouter.route("/guardian/:guardianID").get(guardian);

module.exports = guardianRouter;

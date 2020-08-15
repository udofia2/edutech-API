const express = require("express");
const Students = require("./../model/student.apply");
const { body, validationResult } = require("express-validator");

const { Router } = express;

const studentRegistration = Router();

studentRegistration
  .route("/")
  .get(
    [
      body("fName", "Provide a First Name").notEmpty(),
      body("email", "Provide a valid Email").isEmail(),
      body("lName", "Provide a Last Name").notEmpty(),
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { fName, lName, email } = req.body;

      try {
          const newStudent = new Students({
              fName,
              lName,
              email,
            });
            
            const isMatch = await Students.findOne({email})
    
            if(isMatch) {
                res.json({msg: `${isMatch.email} is already registered. Proceed to the signIn`})
            }
    
          await newStudent.save();
    
          res.json("Your registration is successful");       
      } catch (err) {
          console.error(err)
      }
    }
  );

module.exports = studentRegistration;

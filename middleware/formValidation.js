const validateForm = (body) => {
   const regFormValidation =  [
        body("fName", "Provide a First Name").notEmpty(),
        body("email", "Provide a valid Email").isEmail(),
        body("lName", "Provide a Last Name").notEmpty(),
      ]

      return {
          regFormValidation
      }
}

module.exports = validateForm
const validateForm = (body) => {
  const regFormValidation = [
    body("fName", "Provide a First Name").notEmpty(),
    body("email", "Provide a valid Email").isEmail(),
    body("lName", "Provide a Last Name").notEmpty(),
  ];

  const loginFormValidation = [
    body("email").isEmail(),
    body("studentID").notEmpty()
  ];

  const teacherloginFormValidation = [
    body("email").isEmail(),
    body("password").notEmpty()
  ];

  return {
    regFormValidation,
    loginFormValidation,
    teacherloginFormValidation
  };
};

module.exports = validateForm;

const studentForm = (validationResult, Students) => {

    const getStudents = async (req, res) => {
        try {
          const students = await Students.find({});
          res.json({ total: students.length, students });
        } catch (err) {
          console.error(err);
        }
      }

  const createStudent = async (req, res) => {

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

      const isMatch = await Students.findOne({ email });

      if (isMatch) {
        res.json({
          msg: `${isMatch.email} is already registered. Proceed to the signIn`,
        });
      }

      await newStudent.save();

      res.json("Your registration is successful");
    } catch (err) {
      console.error(err);
    }
  };

  return {
    createStudent,
    getStudents
  };
};

module.exports = studentForm
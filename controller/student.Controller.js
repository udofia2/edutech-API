const { compareSync } = require("bcrypt");
const config = require("../config/default");
const jwt = require("jsonwebtoken");
const Guardians = require("../model/guardian.model");

const studentActions = (validationResult, Students, uuidv4, bcrypt) => {
  /**@route    Get api/v1/students
   *@desc     Fetch all Students
   *@access   Public (Everyone can access )
   */
  const getStudents = async (req, res) => {
    try {
      const students = await Students.find({}).sort({ CreatedAt: "desc" });

      res.json({ total: students.length, students });
    } catch (err) {
      console.error(err);
    }
  };

  /**@route    Post api/v1/students
   *@desc     Create a new Student
   *@access   Public (Everyone can access )
   */
  const createStudent = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const studentID = uuidv4().slice(0, 8);
    const {
      fName,
      lName,
      email,
      parentEmail,
      classes,
      DOB,
      age,
      gender,
    } = req.body;
    try {
      const newStudent = new Students({
        fName,
        lName,
        email,
        studentID,
        parentEmail,
        classes,
        DOB,
        age,
        gender,
      });

      const isMatch = await Students.findOne({ email });

      if (isMatch) {
        res.json({
          msg: `${isMatch.email} is already registered. Proceed to the signIn`,
        });
      }

      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(studentID, salt);
      newStudent.studentID = hash;

      await newStudent.save();

      const parentID = uuidv4().slice(-12);
      const guardian = new Guardians({
        email: newStudent.parentEmail,
        parentID,
        wards: req.user,
      });

      guardian.save();

      const payload = {
        user: {
          id: newStudent._id,
        },
      };

      jwt.sign(
        payload,
        config.jwtsecret,
        {
          expiresIn: 3600 * 78,
        },
        (err, token) => {
          if (err) throw err;
          console.log(token);
          // res.json({ token });
          res.json({
            token,
            msg: "Your registration is successful",
            instruction:
              "Your StudentId will be required to login, Secure it properly",
            StudentId: studentID,
          });
        }
      );
    } catch (err) {
      console.error(err);
      return res.status(500).send("Server Error");
    }
  };

  /**@route    Post api/v1/students
   *@desc     Login a Registered Student
   *@access   Private (Everyone can access )
   */
  const loginStudent = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, studentID } = req.body;

    const student = await Students.findOne({ email });
    if (!student) {
      return res.json({
        msg: `${email} is not a student, Proceed to registration page`,
      });
    }

    const isMatch = await bcrypt.compare(studentID, student.studentID);

    if (!isMatch) {
      return res.json({ msg: "Invalid Credentials" });
    }

    if (isMatch) {
      let { fName, lName } = student;
      fName.toUpperCase();

      res.json({
        msg: `Welcome back ${fName.toUpperCase()} ${lName.toUpperCase()}`,
      });
    }
  };
  /**@route    Post api/v1/students
   *@desc     check if a student is admitted
   *@access   Public (Everyone can access )
   */
  const checkAdmission = async (req, res) => {
    const { email } = req.body;

    if (!email) {
      return res.json("please provide a valid email");
    }

    try {
      const admitted = await Students.findOne({ email });
      console.log(admitted);
      if (!admitted) {
        return res.json(`Sorry!!!, ${email} is not admitted student.`);
      }

      res.json(`Congration!!!, ${admitted.fName} you are have been admitted`);
    } catch (err) {
      console.error(err);
    }
  };

  return {
    createStudent,
    getStudents,
    loginStudent,
    checkAdmission,
  };
};

module.exports = studentActions;

const teacherActions = (Teacher, bcrypt, validationResult) => {
  /**@route   GET api/v1/teachers
   *@desc     Fetch all teachers
   *@access   Public (Everyone can access )
   */

  const teachers = async (req, res) => {
    try {
      const teacher = await Teacher.find({});
      res.json(teacher);
    } catch (err) {
      console.log(err);
    }
  };

  /**@route    Get api/v1/new/teacher
   *@desc     creates a teacher
   *@access   Public (Everyone can access )
   */
  const createTeacher = async (req, res) => {
    const { name, email, password } = req.body;

    try {
      const teacher = new Teacher({
        name,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
      teacher.password = hash;

      await teacher.save();
      res.json(teacher);
    } catch (err) {
      console.error(err);
    }
  };

  /**@route    POST api/v1/teacher/login
   *@desc     login a teacher
   *@access   Public (Everyone can access )
   */
  const loginTeacher = async (req, res) => {
    const { email, password } = req.body;

    try {
      const teacher = await Teacher.findOne({ email });
      if (!email) {
        res.json(`Sorry!!!, ${email} is not a Teacher in this instition`)
      }
      
      const isMatch = await bcrypt.compare(password, teacher.password)

      if(isMatch){
        res.json(`Welcome back, ${teacher.name}`)
      }
    } catch (err) {
      console.error(err);
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  };

  return {
    teachers,
    createTeacher,
    loginTeacher,
  };
};

module.exports = teacherActions;

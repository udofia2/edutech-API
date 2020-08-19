const managment = (Teacher, Students, Guardains) => {
  /**@route   GET api/v1/management/dashboard
   *@desc     Fetch all Students
   *@access   Protected (Only authorized users can access )
   */
  const students = async (req, res) => {
    const teachers = await Teacher.find({}).select("-password  -__v");
    res.json(teachers);
  };

  return {
    students,
  };
};

module.exports = managment;

const adminController = () => {
  //create Admin
  const createAdmin = async (req, res) => {
    const { name, password, parents, students } = req.body;

    try {
      const admin = new admin({
        name,
        email,
        parents,
        students,
        password,
      });

      newStudent.studentID = hash;
      const salt = bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
      admin.password = hash;

      await admin.save();

      res.json({admin})
    } catch (err) {
      console.error(err);
    }
    res.json("am Admin");
  };

  return {
    createAdmin,
  };
};

module.exports = adminController;

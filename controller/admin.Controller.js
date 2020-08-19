const adminController = (Admin, bcrypt) => {
  /**@route   GET api/v1/admins
   *@desc     Fetch all admins
   *@access   Public (Everyone can access )
   */
  const admins = async (req, res) => {
    try {
      const allAdmin = await Admin.find({});
      res.json(allAdmin);
    } catch (err) {
      console.error(err);
    }
  };

  /**@route   POST api/v1/new/admin
   *@desc     Create an admin
   *@access   Public (Everyone can access )
   */
  const createAdmin = async (req, res) => {
    const { name, email, password, parents, students } = req.body;

    try {
      const admin = new Admin({
        name,
        email,
        parents,
        students,
        password,
      });

      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
      admin.password = hash;

      await admin.save();

      res.json({ admin });
    } catch (err) {
      console.error(err);
    }
  };

  /**@route   POST api/v1/admins
   *@desc     Logs in an admin
   *@access   Public (Everyone can access )
   */
  const adminLogin = async (req, res) => {
    res.json("Admin Logged in success...");
  };

  return {
    createAdmin,
    adminLogin,
    admins,
  };
};

module.exports = adminController;

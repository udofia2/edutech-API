const adminController = (Admin, bcrypt) => {
  
  //Fetch all admin
  const admins = async (req, res) => {
    
    try{
      const allAdmin = await Admin.find({})
      res.json(allAdmin)
    }catch(err) {
      console.error(err)
    }
  }
  //create Admin
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

      res.json({admin})
    } catch (err) {
      console.error(err);
    }
  };

  //Login Admin
  const adminLogin = async (req, res) => {
    res.json('Admin Logged in success...')
  }

  return {
    createAdmin,
    adminLogin,
    admins
  };
};

module.exports = adminController;

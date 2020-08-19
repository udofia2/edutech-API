const guardianActions = (Guardian) => {
  /**
   * @route           /api/v1/guardians
   * @description     All parents
   * @access          Everyone can access
   */
  const guardians = async (req, res) => {
    try {
      const guardian = await Guardian.find();

      res.json(guardian);
    } catch (err) {
      console.error(err);
    }
  };

  /**
   * @route           /api/v1/guardian/:guardianID
   * @description     fetches single parents
   * @access          Everyone can access
   */
  const guardian = async (req, res) => {
    try {
      const guardians = await Guardian.findById(
        req.params.guardianID
      ).populate("student", ["fName", "lName"]);
      res.json(guardians);
    } catch (err) {
      console.error(err);
    }
  };

  return {
    guardians,
    guardian,
  };
};

module.exports = guardianActions;

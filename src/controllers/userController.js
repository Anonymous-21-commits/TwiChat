const UserService = require("../services/userService");

const signup = async (req, res) => {
  try {
    const user = await new UserService().signup({
      email: req.body.email,
      password: req.body.password,
      userName: req.body.userName,
    });
    return res.status(200).json({
      success: true,
      user: user,
      message: "sign up successful",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      err: { err },
      message: "sign up failed",
    });
  }
};
module.exports = signup;

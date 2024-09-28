const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../Models/User");

// registration
const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    const checkUser = await User.findOne({ email });
    if (checkUser) {
      return res.status(501).json({
        success: false,
        message:
          " this email already exist please try agin with diffrent email",
      });
    }
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      userName,
      email,
      password: hashPassword,
    });
    await newUser.save();

    res.status(200).json({
      success: true,
      message: "registration successful",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "something went wron while registering",
      //   error: message.err,
    });
  }
};

// login**************************************************************************************************

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      return res.json({
        success: false,
        message: "Email does't exists! please register first",
      });
    }

    const checkPassword = await bcrypt.compare(password, checkUser.password);
    if (!checkPassword) {
      return res.json({
        success: false,
        message: "Incorrect password! try again ",
      });
    }
     const token = jwt.sign({
        id : checkUser._id, role : checkUser.role, email : checkUser.email
     },'CLIENT_SECRET_KEY',{expiresIn : '60m'});

     res.cookie('token',token,{httpOnly : true, secure : false}).json({
        success: true,
        message:"SuccessFully LogedIn",
        user : {
             email : checkUser.email,
             role : checkUser.role,
             id : checkUser._id,
        }
     })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "something went wrong while login",
      //   error: message.error,

    });
  }
};

// logout

// auth middleware

module.exports = { registerUser,loginUser };

const express = require("express");
const {registerUser,loginUser,logoutUser,authMiddleware}= require("../../Controllers/auth/auth-controller")

const router = express.Router();

router.post("/register",registerUser);
router.post("/login",loginUser);
router.post("/logout",logoutUser);
router.get("/check-auth",authMiddleware, ()=>{
      const user = req.user;
      resizeBy.status(200).json({
        success:true,
        message:" Authenticated User!",
        user
      });
});

module.exports=router;
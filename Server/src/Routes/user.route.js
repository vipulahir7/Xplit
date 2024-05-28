const express = require("express");
const router = express.Router();
const {handleUserSignUp, handleUserLogin,getUser, logoutUser} = require("../controllers/user.controller.js") 
const verifyJWT = require("../middlewares/verifyJWT.js")

router.route("/signup").post(handleUserSignUp);
router.route("/login").post(handleUserLogin);
router.route("/getUser").post(verifyJWT,getUser);
router.route("/logOut").post(verifyJWT,logoutUser);

module.exports = router
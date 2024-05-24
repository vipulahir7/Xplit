const express = require("express");
const router = express.Router();
const {handleUserSignUp, handleUserLogin} = require("../controllers/user.controller.js") 

router.post("/signup",handleUserSignUp)
router.post("/login",handleUserLogin)

module.exports = router
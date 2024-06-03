const express = require("express");
const router = express.Router();
const verifyJWT = require("../middlewares/verifyJWT.js");
const { HandleVerifyAddUser, HandleLoadUserList } = require("../controllers/transaction.controller.js");

router.route("/verifyAddUser").post(verifyJWT,HandleVerifyAddUser);
router.route("/loadUserList").post(verifyJWT,HandleLoadUserList);

module.exports = router;
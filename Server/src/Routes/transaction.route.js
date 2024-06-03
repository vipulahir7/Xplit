const express = require("express");
const router = express.Router();
const verifyJWT = require("../middlewares/verifyJWT.js");
const { HandleVerifyAddUser, HandleLoadUserList, HandleAddTransaction, HandleLoadTransactions } = require("../controllers/transaction.controller.js");

router.route("/verifyAddUser").post(verifyJWT,HandleVerifyAddUser);
router.route("/loadUserList").post(verifyJWT,HandleLoadUserList);
router.route("/addTransaction").post(verifyJWT,HandleAddTransaction);
router.route("/loadTransactions").post(verifyJWT,HandleLoadTransactions);

module.exports = router;
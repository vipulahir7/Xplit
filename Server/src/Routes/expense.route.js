const express = require("express");
const router = express.Router();
const verifyJWT = require("../middlewares/verifyJWT.js")
const {addExpense,loadExpense} = require("../controllers/expense.controller.js");

router.route("/addExpense").post(verifyJWT , addExpense);
router.route("/loadExpense").post(verifyJWT , loadExpense);

module.exports = router
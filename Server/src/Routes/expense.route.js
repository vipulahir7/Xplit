const express = require("express");
const router = express.Router();
const verifyJWT = require("../middlewares/verifyJWT.js")
const {addExpense,loadExpense,getDailySum} = require("../controllers/expense.controller.js");

router.route("/addExpense").post(verifyJWT , addExpense);
router.route("/loadExpense").post(verifyJWT , loadExpense);
router.route("/getDailySum").post(verifyJWT , getDailySum);

module.exports = router
const express = require("express");
const router = express.Router();
const verifyJWT = require("../middlewares/verifyJWT.js")
const {addExpense,loadExpense,getDailySum,getMonthlySum , getYearlySum} = require("../controllers/expense.controller.js");

router.route("/addExpense").post(verifyJWT , addExpense);
router.route("/loadExpense").post(verifyJWT , loadExpense);
router.route("/getDailySum").post(verifyJWT , getDailySum);
router.route("/getMonthlySum").post(verifyJWT , getMonthlySum);
router.route("/getYearlySum").post(verifyJWT , getYearlySum);

module.exports = router
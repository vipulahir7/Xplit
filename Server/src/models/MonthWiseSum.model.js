const mongoose = require("mongoose");

const MonthWiseSumSchema = new mongoose.Schema({
    amounts:{
        type: Number
    },
    month:{
        type: Date
    }
})

const MonthWiseSum = mongoose.model("MonthWiseSum",MonthWiseSumSchema);

module.exports = MonthWiseSum;
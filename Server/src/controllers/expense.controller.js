const ApiError = require("../utils/ApiError")
const User = require("../models/user.model.js")
const ExpenseList = require("../models/ExpenseList.model.js")
const ApiResponse = require("../utils/ApiResponse")

const addExpense = async (req,res) => {

    try {
        const user = req.user

        if(!user){
            res.status(401).json(new ApiResponse(401,{},"You are not logged in to add expense"));
        }

        const {amount, note, category} = req.body

        const expense = await ExpenseList.create({
            amount,
            note,
            category
        })
        const userDB = await User.findById(user._id);
        userDB.expenseLists.push(expense);
        
        await userDB.save({validateBeforeSave:false});
        res.status(200).json(new ApiResponse(200,expense,"expense added"))
    }
    catch(err){
        throw new ApiError(500,"Failed to add expense");
    }
}

const loadExpense =async (req,res)=>{
    try{
        const user = req.user;
        if(!user){
            res.status(401).json(new ApiResponse(401,{},"You are not logged in to add expense"));
        }
        const data= await User.findById(user._id);
        let response = [];
        if (data.expenseLists) {
            response = await Promise.all(data.expenseLists.map(async (expenseId) => {
                const exp = await ExpenseList.findById(expenseId);
                return exp;
            }));
        }

        res.status(200).json(new ApiResponse(200,response,"Expense loaded successfully"));
    }
    catch(err){
        throw new ApiError(500,"failed to load expense");
    }
}

module.exports ={
    addExpense,
    loadExpense
}
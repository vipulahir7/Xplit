const ApiError = require("../utils/ApiError")
const User = require("../models/user.model.js")
const ExpenseList = require("../models/ExpenseList.model.js")
const ApiResponse = require("../utils/ApiResponse")
const DateWiseSum = require("../models/DateWiseSum.model.js")

const addExpense = async (req,res) => {

    try {
        const user = req.user

        if(!user){
            res.status(401).json(new ApiResponse(401,{},"You are not logged in to add expense"));
        }

        const {amount, note, category,createDate} = req.body

        const expense = await ExpenseList.create({
            amount,
            note,
            category,
            createDate
        })
        const userDB = await User.findById(user._id);
        userDB.expenseLists.push(expense);

        const findDate= new Date(createDate);

        let notFound = true;

        if(userDB.dateWiseSums){
            await Promise.all(userDB.dateWiseSums.map(async (dateWiseSumId) => {
                const dateSum = await DateWiseSum.findById(dateWiseSumId);
                const createDate = new Date(dateSum.date);
                // return exp;

                if (createDate.getFullYear() === findDate.getFullYear() &&
                    createDate.getMonth() === findDate.getMonth() &&
                    createDate.getDate() === findDate.getDate()) {
                    notFound=false;
                    dateSum.amount += parseInt(amount);
                    await dateSum.save();
                }
            }));
        }

        if(notFound){
            const dateWiseSum =await DateWiseSum.create({
                amount,
                date:createDate
            })
            userDB.dateWiseSums.push(dateWiseSum)
        }
        
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
        const dateToFind = new Date(req.body.date);
        if (data.expenseLists) {
            response = await Promise.all(data.expenseLists.map(async (expenseId) => {
                const exp = await ExpenseList.findById(expenseId);
                const createDate = new Date(exp.createDate);
                // return exp;

                if (createDate.getFullYear() === dateToFind.getFullYear() &&
                    createDate.getMonth() === dateToFind.getMonth() &&
                    createDate.getDate() === dateToFind.getDate()) {
                    return exp;
                }
            }));
        }

        response = response.filter(exp => exp !== undefined);
        res.status(200).json(new ApiResponse(200,response,"Expense loaded successfully"));
    }
    catch(err){
        throw new ApiError(500,"failed to load expense");
    }
}

const getDailySum = async (req,res)=>{

    try{
        const userDB =await User.findById(req.user._id)
        const date=req.body.date;

        const findDate=new Date(date);
        let amount=0;
        if(userDB.dateWiseSums){
            await Promise.all(userDB.dateWiseSums.map(async (dateWiseSumId) => {
                const dateSum = await DateWiseSum.findById(dateWiseSumId);
                const createDate = new Date(dateSum.date);

                if (createDate.getFullYear() === findDate.getFullYear() &&
                    createDate.getMonth() === findDate.getMonth() &&
                    createDate.getDate() === findDate.getDate()) {
                    amount=dateSum.amount;
                }
            }));
        }
        res.status(200).json(new ApiResponse(200,{amount},"Daily sum fetched"));
    }
    catch(err){
        console.log("Error while fetching daily sum",err);
    }   
}

module.exports ={
    addExpense,
    loadExpense,
    getDailySum
}
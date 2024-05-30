const ApiError = require("../utils/ApiError")
const User = require("../models/user.model.js")
const ExpenseList = require("../models/ExpenseList.model.js")
const ApiResponse = require("../utils/ApiResponse")
const DateWiseSum = require("../models/DateWiseSum.model.js")
const MonthWiseSum = require("../models/MonthWiseSum.model.js")

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

        let dailyNotFound = true;

        if(userDB.dateWiseSums){
            await Promise.all(userDB.dateWiseSums.map(async (dateWiseSumId) => {
                const dateSum = await DateWiseSum.findById(dateWiseSumId);
                const createDate = new Date(dateSum.date);
                // return exp;

                if (createDate.getFullYear() === findDate.getFullYear() &&
                    createDate.getMonth() === findDate.getMonth() &&
                    createDate.getDate() === findDate.getDate()) {
                    dailyNotFound=false;
                    dateSum.amount += parseInt(amount);
                    await dateSum.save();
                }
            }));
        }
        if(dailyNotFound){
            const dateWiseSum =await DateWiseSum.create({
                amount,
                date:createDate
            })
            userDB.dateWiseSums.push(dateWiseSum)
        }
        
        let monthlyNotFound = true;

        if(userDB.monthWiseSums){
            await Promise.all(userDB.monthWiseSums.map(async (monthWiseSumId) => {
                const monthSum = await MonthWiseSum.findById(monthWiseSumId);
                const createDate = new Date(monthSum.date);

                if (createDate.getFullYear() === findDate.getFullYear() &&
                    createDate.getMonth() === findDate.getMonth()) {
                    monthlyNotFound=false;
                    monthSum.amount += parseInt(amount);
                    await monthSum.save();
                }
            }));
        }
        if(monthlyNotFound){
            const monthWiseSum =await MonthWiseSum.create({
                amount,
                date:createDate
            })
            userDB.monthWiseSums.push(monthWiseSum)
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

const getMonthlySum =async (req,res)=>{
    try{
        const userDB =await User.findById(req.user._id)
        const date=req.body.date;
        const findDate=new Date(date);
        let amount=0;
        if(userDB.monthWiseSums){
            await Promise.all(userDB.monthWiseSums.map(async (monthWiseSumId) => {
                const monthSum = await MonthWiseSum.findById(monthWiseSumId);
                const createDate = new Date(monthSum.date);

                if (createDate.getFullYear() === findDate.getFullYear() &&
                    createDate.getMonth() === findDate.getMonth()) {
                    amount=monthSum.amount;
                }
            }));
        }
        res.status(200).json(new ApiResponse(200,{amount},"Monthly sum fetched"));
    }
    catch(err){
        console.log("Error while fetching monthly sum",err);
    }
}

const getYearlySum =async (req,res)=>{
    try{
        const userDB =await User.findById(req.user._id)
        const findDate=new Date();
        let amount=0;
        if(userDB.monthWiseSums){
            await Promise.all(userDB.monthWiseSums.map(async (monthWiseSumId) => {
                const monthSum = await MonthWiseSum.findById(monthWiseSumId);
                const createDate = new Date(monthSum.date);

                if (createDate.getFullYear() === findDate.getFullYear()) {
                    amount+=monthSum.amount;
                }
            }));
        }
        res.status(200).json(new ApiResponse(200,{amount},"Monthly sum fetched")); 
    }
    catch(err){
        console.log("Error while fetching yearly sum",err);
    }
}
const loadDailySum = async (req,res)=>{
    try{
        const userDB = await User.findById(req.user._id)
        let findDate =new Date(req.body.date);
        const month=findDate.getMonth();

        let dailySum=[];

        while(findDate.getMonth() === month){
            const date=new Date(findDate);
            dailySum.push({
                date,
                amount:0
            })
            findDate.setDate(findDate.getDate()+1);
        }

        findDate.setMonth(findDate.getMonth()-1);

        if(userDB.dateWiseSums){
            await Promise.all(userDB.dateWiseSums.map(async (dateWiseSumId) => {
                const dateSum = await DateWiseSum.findById(dateWiseSumId);
                const createDate = new Date(dateSum.date);

                if (createDate.getFullYear() === findDate.getFullYear() &&
                    createDate.getMonth() === findDate.getMonth()) {

                    dailySum[createDate.getDate() - 1].amount+=dateSum.amount;
                }
            }));
        }
        res.status(200).json(dailySum);
    }
    catch(err){
        console.log("Error while loading daily sum",err);
    }
}

const loadMonthlySum = async (req,res)=>{
    try{
        const userDB = await User.findById(req.user._id)
        let findDate =new Date(req.body.date);
        const year=findDate.getYear();

        let dateTofind=new Date(findDate);

        let monthlySum=[];

        while(findDate.getYear() === year){
            const date=new Date(findDate);
            monthlySum.push({
                date,
                amount:0
            })
            findDate.setMonth(findDate.getMonth()+1);
        }

        findDate=dateTofind;

        if(userDB.monthWiseSums){
            await Promise.all(userDB.monthWiseSums.map(async (monthWiseSumId) => {
                const monthSum = await MonthWiseSum.findById(monthWiseSumId);
                const createDate = new Date(monthSum.date);

                if (createDate.getFullYear() === findDate.getFullYear()) {
                    monthlySum[createDate.getMonth()].amount+=monthSum.amount;
                }
            }));
        }

        res.status(200).json(monthlySum);
    }
    catch(err){
        console.log("Error while loading daily sum",err);
    }
}

module.exports ={
    addExpense,
    loadExpense,
    getDailySum,
    getMonthlySum,
    getYearlySum,
    loadDailySum,
    loadMonthlySum
}
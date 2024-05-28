const express= require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const userRouter =require("./src/Routes/user.route.js");
const expenseRouter= require("./src/Routes/expense.route.js")
const verifyJWT = require("./src/middlewares/verifyJWT.js");

const app=express();

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: false, limit: "16kb"}))

app.use(cors({
    origin:"http://localhost:5173",
    credentials: true
}))

app.use(cookieParser())
app.use("/user",userRouter)
app.use("/expense",expenseRouter);

module.exports=app
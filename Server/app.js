const express= require("express");
const app=express();

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: false, limit: "16kb"}))


const userRouter =require("./src/Routes/user.route.js")
app.use("/user",userRouter)

module.exports=app
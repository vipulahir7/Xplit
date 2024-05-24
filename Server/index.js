const connectDB =require("./src/db/connectDB.js")
const express = require("express");
const env = require('dotenv');
env.config({
    path:"./.env"
})

connectDB().then(()=>{
    const app = express();
    app.listen(process.env.PORT,()=>{
        console.log("Server is listening on port ",`${process.env.PORT}`);
    })
})
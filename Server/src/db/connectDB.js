const mongoose= require("mongoose");
const ApiError =require("../utils/ApiError.js")

module.exports=async function connetDB(){
    const connected = await mongoose.connect("mongodb://localhost:27017");
    if(connected){
        console.log("Connected to MongoDB");
        return connected
    }
    throw new ApiError(500,"Failed to connect with server");
}
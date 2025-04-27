const mongoose= require("mongoose");
const ApiError =require("../utils/ApiError.js")

module.exports=async function connetDB(){
    // console.log(process.env.MONGO_URI);
    const connected = await mongoose.connect(process.env.MONGO_URI);
    if(connected){
        console.log("Connected to MongoDB");
        return connected
    }
    throw new ApiError(500,"Failed to connect with server");
}
const User = require("../models/user.model.js");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");

async function handleUserSignUp(req, res){
    const {name, email, password} = req.body;
    try{
        const user=await User.create({
            name,
            email,
            password
        });

        if(!user) throw new ApiError(500,"Failed to create user")
        res.json(new ApiResponse(200,"User succesfully created"))
    }
    catch(err){
        throw new ApiError(500,"Error catched Failed to create user");
    }
}    


module.exports = {
    handleUserSignUp
}
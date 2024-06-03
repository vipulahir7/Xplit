const User = require("../models/user.model");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");

async function HandleVerifyAddUser(req,res){
    try{
        const reqUser = req.user;
        if(reqUser){
            res.status(401).json(new ApiResponse(401,{},"You are not logged in to transaction"));
        }
        const {email} = req.body;
        const user = await User.find({email});
        if(!user){
            res.status(400).json(new ApiResponse(400,{},"User not exist"));
        }

        const userDB = await User.findById(reqUser._id);

        userDB.userList.push({username:user.name,email});
        await userDB.save({validateBeforeSave:false});

        res.status(200).json(new ApiResponse(200,{username:userDB.name},"Success"));
    }
    catch(err){
        throw new ApiError(500,"Failed to transaction");
    }
}

async function HandleLoadUserList(req,res){
    try{
        const reqUser = req.user;
        if(reqUser){
            res.status(401).json(new ApiResponse(401,{},"You are not logged in to transaction"));
        }
        const userDB = await User.findById(reqUser._id);
        res.status(200).json(new ApiResponse(200,userDB.userList,"transaction loaded successfully"));
    }
    catch(err){
        throw new ApiError(500,"Failed to Load List");
    }
}

module.exports = {
    HandleVerifyAddUser,
    HandleLoadUserList
}
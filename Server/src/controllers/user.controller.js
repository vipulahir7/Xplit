const User = require("../models/user.model.js");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");

const options = {
    httpOnly: true,
    secure: true
}

const generateAccessAndRefreshToken = async function(userId){
    try{
        const user = await User.findById(userId);
        const accessToken = await user.generateAccessToken()
        const refreshToken =await user.generateRefreshToken()

        
        user.refreshToken=refreshToken
        await user.save({validateBeforeSave:false})
        return {accessToken, refreshToken}
    }
    catch(err){
        throw new ApiError(500,"Something went wrong while accessing tokens");
    }
}


async function handleUserSignUp(req, res){
    const {name, email, password} = req.body;

    try{
        const userAlreadyExist = await User.findOne({email});
        if(userAlreadyExist){
            res.status(401).json(new ApiResponse(401,userAlreadyExist,"User already exist"));
        }
        if(!userAlreadyExist){
            const user=await User.create({
                name,
                email,
                password
            });
    
            const createdUser=await User.findById(user._id).select("-password -refreshToken");
    
            if(!createdUser) throw new ApiError(500,"Failed to create user")
            res.status(201).json(new ApiResponse(200,createdUser,"User succesfully created"))
        }
    }
    catch(err){
        throw new ApiError(500,err);
    }
}    

async function handleUserLogin(req, res){
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user) res.status(401).json(new ApiResponse(401,"" ,"user not found"));
        else{
            const isPasswordCorrect = await user.isPasswordCorrect(password)
    
            if(isPasswordCorrect){
    
                const loggedInUser = await User.findById(user._id).select("-password -refreshToken");
    
                const {accessToken, refreshToken}=await generateAccessAndRefreshToken(user._id)
    
                
                res
                .status(200)
                .cookie("accessToken" , accessToken, options)
                .cookie("refreshToken" , refreshToken, options)
                .json(new ApiResponse(200,{loggedInUser,refreshToken,accessToken},"User logged in successfully"));
            }
            else{
                res.status(400).json(new ApiResponse(400,"" ,"Password is not correct"));
            }
        }
    }
    catch(err){
        throw new ApiError(500,err);
    }
}    

const getUser = async function (req,res){
    try{
        if(req.user){
            res.status(200).json(new ApiResponse(200,req.user,"User fetched successfully"));
        }
        else{
            res.status(400).json(new ApiResponse(400,{},"failed to fetch user"));
        }
    }
    catch(err){
        console.log("Error occured while getting user");
    }
}

const logoutUser = async(req, res) => {

    if(!req.user){
        res.status(400).json(new ApiResponse(400,{},"User not found can't logout"));
    }

    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                refreshToken: 1 
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged Out"))
}

module.exports = {
    handleUserSignUp,
    handleUserLogin,
    getUser,
    logoutUser
}
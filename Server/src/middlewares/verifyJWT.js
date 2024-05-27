const ApiError =require("../utils/ApiError.js");
const jwt = require("jsonwebtoken");
const  User =require("../models/user.model.js");

const verifyJWT = async(req, _, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")

        if (!token) {
            throw new ApiError(401, "Unauthorized request token failed")
        }
    
        const decodedToken = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
    
        if (!user) {
            throw new ApiError(401, "Invalid Access Token")
        }
    
        req.user = user;
        next()

    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token")
    }   
}

module.exports = verifyJWT
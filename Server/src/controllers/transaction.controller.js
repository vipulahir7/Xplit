const TransactionChat = require("../models/transactionChat.model");
const User = require("../models/user.model");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");
const onlineUsers={};

async function HandleVerifyAddUser(req,res){
    try{
        const reqUser = req.user;
        if(!reqUser){
            res.status(401).json(new ApiResponse(401,{},"You are not logged in to transaction"));
        }
        const {email} = req.body;
        const user = await User.findOne({email});
        if(!user){
            res.status(400).json(new ApiResponse(400,{},"User not exist"));
        }
        else{
            const userDB = await User.findById(reqUser._id);
    
            userDB.userList.push({username:user.name,email});
            await userDB.save({validateBeforeSave:false});
    
            res.status(200).json(new ApiResponse(200,{username:user.name},"Success"));
        }
    }
    catch(err){
        console.log("error : ",err);
        throw new ApiError(500,"Failed to transaction");
    }
}

async function HandleLoadUserList(req,res){
    try{
        const reqUser = req.user;
        if(!reqUser){
            res.status(401).json(new ApiResponse(401,{},"You are not logged in to transaction"));
        }
        const userDB = await User.findById(reqUser._id);
        res.status(200).json(new ApiResponse(200,userDB.userList,"transaction loaded successfully"));
    }
    catch(err){
        console.log("error : ",err)
        throw new ApiError(500,"Failed to Load List");
    }
}

async function HandleAddTransaction(req,res){
    try{
        const reqUser = req.user;
        if(!reqUser){
            res.status(401).json(new ApiResponse(401,{},"You are not logged in to transaction"));
        }
        else{
            const userDB = await User.findById(reqUser._id);
            const firstPerson = userDB.email;
            const secondPerson = req.body.recieverEmail;

            let chat = await TransactionChat.findOne({firstPersonEmail : firstPerson,secondPersonEmail:secondPerson});
            if(!chat){
                chat=await TransactionChat.findOne({firstPersonEmail : secondPerson,secondPersonEmail:firstPerson}); 
            }
            let {amount,note} = req.body;
            if(amount==''){
                amount=0;
            }
            else{
                amount=parseInt(amount);
            }

            const msg={
                amount,
                note,
                sendBy:firstPerson,
                createdAt : new Date()
            }
            
            if(chat){
                chat.transactions.push(msg);
                await chat.save({validateBeforeSave:false});
            }
            else{
                chat = await TransactionChat.create({firstPersonEmail : firstPerson,secondPersonEmail:secondPerson,transactions:[msg]});
            }
            if(onlineUsers[secondPerson] && io){
                io.to(onlineUsers[secondPerson]).emit("transaction-added",msg);
            }

            res.status(200).json(new ApiResponse(200,{},"transaction loaded successfully"));
        }
    }
    catch(err){
        console.log("error : ",err)
        throw new ApiError(500,"Failed to add transaction");
    }
}

async function HandleLoadTransactions(req,res){
    try{
        const reqUser = req.user;
        if(!reqUser){
            res.status(401).json(new ApiResponse(401,{},"You are not logged in to transaction"));
        }
        else{
            const userDB = await User.findById(reqUser._id);
            const firstPerson = userDB.email;
            const secondPerson = req.body.recieverEmail;
            let chat = await TransactionChat.findOne({firstPersonEmail : firstPerson,secondPersonEmail:secondPerson});
            if(!chat){
                chat=await TransactionChat.findOne({firstPersonEmail : secondPerson,secondPersonEmail:firstPerson}); 
            }
            if(chat){
                res.status(200).json(new ApiResponse(200,chat.transactions,"Success"));
            }
            else{
                res.status(500).json(new ApiResponse(500,{},"Server error"));
            }
        }
    }
    catch(err){
        console.log("error : ",err)
        throw new ApiError(500,"Failed to add transaction");
    }
}

async function HandleAddOnlineUser(req,res){
    try{
        const reqUser = req.user;
        if(!reqUser){
            res.status(401).json(new ApiResponse(401,{},"You are not logged in to transaction"));
        }
        else{
            const email = req.user.email;
            const socketId=req.body.socketId;

            onlineUsers[email]=socketId;
            console.log(onlineUsers)
        }
    }
    catch(err){
        console.log("error : ",err)
        throw new ApiError(500,"Failed to add Online User");
    }
}

async function HandleremoveOnlineUser(req,res){
    try{
        const reqUser = req.user;
        if(!reqUser){
            res.status(401).json(new ApiResponse(401,{},"You are not logged in to transaction"));
        }
        else{
            const email = req.user.email;
            delete onlineUsers[email];
            console.log(onlineUsers);
        }
    }
    catch(err){
        console.log("error : ",err)
        throw new ApiError(500,"Failed to remove Online User");
    }
}

module.exports = {
    HandleVerifyAddUser,
    HandleLoadUserList,
    HandleAddTransaction,
    HandleLoadTransactions,
    HandleAddOnlineUser,
    HandleremoveOnlineUser
}
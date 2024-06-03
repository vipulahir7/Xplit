const mongoose = require("mongoose");

const TransactionChatSchema = new mongoose.Schema({
    senderEmail:{
        type: String,
        required: true
    },
    recieverEmail:{
        type: String,
        required: true
    },
    note:{
        type: String,
    },
    amount:{
        type: String
    }
},{timestamp: true});

const TransactionChat = mongoose.model("transactionChat",TransactionChatSchema);

module.exports = TransactionChat;
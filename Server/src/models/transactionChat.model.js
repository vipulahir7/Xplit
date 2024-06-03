const mongoose = require("mongoose");

const TransactionChatSchema = new mongoose.Schema({
    firstPersonEmail:{
        type: String,
        required: true
    },
    secondPersonEmail:{
        type: String,
        required: true
    },
    transactions:[
        {
            type:Object
        }
    ]
});

const TransactionChat = mongoose.model("transactionChat",TransactionChatSchema);

module.exports = TransactionChat;
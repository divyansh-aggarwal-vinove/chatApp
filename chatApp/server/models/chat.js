const mongoose = require('./connection');
const chatSchema = new mongoose.Schema({
    'from': { type: String, required: true },
    'to': { type: String, required: true },
    'message': { type: String },
    'timestamp': { type: Date, default: Date.now },
})

const chatModel = mongoose.model("Chat", chatSchema)
module.exports = chatModel;
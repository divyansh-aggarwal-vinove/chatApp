const chatModel = require('../models/chat');

const chatOperations = {
    add(message) {
        chatModel.create(message, (err) => {
            const messages = []
            messages.push(message);
            if (!err) {
                return messages
            }
            else {
                return "Error";
            }
        })
    },

    history(ToFrom, res) {
        chatModel.find({ 'from': ToFrom.from, 'to': ToFrom.to }, (err, doc) => {
            if (!err) {
                const arr = JSON.stringify(doc);
                res.send(arr);
            } else {
                res.send("Can't find any chats");
            }
        })
    }
};

module.exports = chatOperations;
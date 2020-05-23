const mongoose = require('./connection');
const adminSchema = new mongoose.Schema({
    'firstname': { type: String, required: true },
    'lastname': { type: String, required: true },
    'userid': { type: String, required: true, unique: true }
})

const admModel = mongoose.model("Admin", adminSchema);
module.exports = admModel;
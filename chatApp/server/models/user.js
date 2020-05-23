const mongoose = require('./connection');
const userSchema = new mongoose.Schema({
    'firstname': { type: String, required: true },
    'lastname': { type: String, required: true },
    'userid': { type: String, required: true, unique: true },
    'phno': { type: Number, required: true }
})

const usrModel = mongoose.model("User", userSchema);
module.exports = usrModel;
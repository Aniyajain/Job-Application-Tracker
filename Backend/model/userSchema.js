const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    "Email" : String,
    "Password" : String,

} ,{timestamps: true});

const user = mongoose.model("user", userSchema);

module.exports = user;


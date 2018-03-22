var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    createdAt: {type: Date, default: Date.now}
});

// declare a model called user of userSchema
module.exports = mongoose.model("User", userSchema);

var mongoose = require("mongoose");

var postSchema = new mongoose.Schema({
    text: String,
    username: String,
    createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model("Post", postSchema);
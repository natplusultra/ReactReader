const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    url: {
        type: String,
        required: true
    },
    saved: {
        type: Boolean,
        default: false,
        required: true
    }
});

const Article = mongoose.model("Article", articleSchema);
module.exports = Article;
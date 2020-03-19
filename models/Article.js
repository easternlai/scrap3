var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    headline: {
        type: String,
        require: true
    },
    summary: {
        type: String,
    },
    url: {
        type: String,
        require: true
    },
    comment: {
        type: Array,
        "default": []
    }
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
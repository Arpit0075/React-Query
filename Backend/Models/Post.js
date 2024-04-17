const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postsSchema = new Schema({
  title: { type: String, required: true },
  body: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  authorName: {
    type: String,
  },
});

const Post = mongoose.model("Post", postsSchema);
module.exports = Post;

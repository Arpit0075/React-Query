//NOTE: Error handling in react query FE
const Post = require("../Models/Post");

exports.getPosts = async (req, res) => {
  try {
    let posts = await Post.find();

    // throw new Error("Intentional error for testing purposes");

    // res
    //   .status(404)
    //   .json({ posts: null, success: false, message: "posts does not exist" });
    res
      .status(200)
      .json({ posts: posts, success: true, message: "posts data sent" });
  } catch (e) {
    console.error(e.message); // Log the error using console.error
    res.status(500).json({ error: e.message }); // Send the error message in the response
  }
};

exports.getPost = async (req, res) => {
  let postId = req.params.postId;
  try {
    let post = await Post.findOne({ _id: postId });
    res.send(post);
  } catch (e) {
    console.log(e);
  }
};
exports.createPost = async (req, res) => {
  let user = req.body.user.user;
  try {
    let newPost = await Post.create({
      ...req.body,
      author: user,
      authorName: req.body.user.user.name,
    });
    res.send(newPost);
  } catch (e) {
    console.log(e);
  }
};

exports.deletePost = async (req, res) => {
  let postId = req.params.postId;
  try {
    let deletedPost = await Post.deleteOne({ _id: postId });
    res.send(deletedPost);
  } catch (e) {
    console.log(e);
  }
};

exports.updatePost = async (req, res) => {
  let postId = req.params.postId;
  let user = req.body.user;
  try {
    let updatedPost = await Post.findOneAndUpdate(
      { _id: postId },
      {
        title: req.body.title,
        body: req.body.body,
      }
    );
    res.send(updatedPost);
  } catch (e) {
    console.log(e);
  }
};

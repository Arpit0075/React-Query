const router = require("express").Router();
const postsController = require("../Controllers/posts");
const authorization = require("../Controllers/authorization");

router.get("/", postsController.getPosts);
router.get("/:postId", postsController.getPost);
// protected routes
router.post("/", authorization.auth, postsController.createPost);
router.delete("/:postId", authorization.auth, postsController.deletePost);
router.put("/:postId", authorization.auth, postsController.updatePost);

module.exports = router;

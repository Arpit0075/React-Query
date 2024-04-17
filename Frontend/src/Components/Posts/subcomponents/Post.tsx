import { Link } from "react-router-dom";
import { PostType } from "../../../types/postType";

type PostProps = {
  post: PostType;
};

function Post({ post }: PostProps) {
  return (
    <div style={{ border: "1px solid wheat" }}>
      <p>Post-Title: {post?.title}</p>
      <p>Author: {post?.authorName}</p>
      <p>
        <Link to={`/${post?._id}`}>Post Link</Link>
      </p>
    </div>
  );
}

export default Post;

import { useState, useCallback, memo } from "react";
import { useParams } from "react-router-dom";
import { useGetPost } from "../Hooks/useGetPost";
import { useDeletePost } from "../Hooks/useDeletePost";
import UpdatePost from "./subcomponent/UpdatePost";
import { Button } from "@mui/material";
import { useIsUserAuthorized } from "../Hooks/useIsUserAuthorized";

function Post() {
  let { postId } = useParams();
  const { post, isLoading, isError } = useGetPost(postId);

  const { isAuthorized } = useIsUserAuthorized(post?.author);

  const [updateDialogueOpen, setUpdateDialogOpen] = useState(false);

  const handleClickOpen = useCallback(
    () => setUpdateDialogOpen(true),
    [updateDialogueOpen]
  );

  const handleClose = useCallback(
    () => setUpdateDialogOpen(false),
    [updateDialogueOpen]
  );

  const { mutation } = useDeletePost();
  const handleDelete = () => {
    mutation.mutate(postId);
  };

  const handleUpdate = () => {
    handleClickOpen();
  };
  return (
    <div
      style={{
        border: "1px solid wheat",
        margin: "1rem",
      }}
    >
      {isLoading && <h3>Loading...</h3>}
      {isError && <h3>Error Occured.....</h3>}
      <p>Title: {post?.title} </p>
      <p>Body: {post?.body}</p>
      <p>Author: {post?.authorName} </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {isAuthorized && (
          <>
            <Button variant="contained" onClick={handleDelete}>
              Delete
            </Button>
            <Button variant="contained" onClick={handleUpdate}>
              Update
            </Button>
          </>
        )}
      </div>
      {post && (
        <UpdatePost
          updateDialogueOpen={updateDialogueOpen}
          handleClose={handleClose}
          title={post.title}
          body={post.body}
          postId={post._id}
        />
      )}
    </div>
  );
}

export default memo(Post);

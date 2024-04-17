import { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useUpdatePost } from "../../Hooks/useUpdatePost";
import { PostStateType } from "../../../types/PostStateType";

type UpdatePostProps = {
  updateDialogueOpen: boolean;
  handleClose: () => void;
  title: string;
  body: string;
  postId: any;
};

function UpdatePost({
  updateDialogueOpen,
  handleClose,
  title,
  body,
  postId,
}: UpdatePostProps) {
  const [updatePost, setUpdatePost] = useState<PostStateType>({
    title: "",
    body: "",
  });

  useEffect(() => {
    setUpdatePost({ title: title, body: body });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUpdatePost((prev) => ({ ...prev, [name]: value }));
  };
  const { mutation } = useUpdatePost();

  const handleUpdate = () => {
    mutation.mutate({ ...updatePost, postId });
    setUpdatePost({ title: "", body: "" });
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={updateDialogueOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{ background: "black" }}
      >
        <DialogTitle id="alert-dialog-title">{"Update Post"}</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ padding: "1rem" }}
          >
            <TextField
              label="Title"
              variant="outlined"
              name="title"
              value={updatePost.title}
              onChange={handleChange}
              autoComplete="off"
            />
            <TextField
              label="Body"
              variant="outlined"
              name="body"
              value={updatePost.body}
              onChange={handleChange}
              autoComplete="off"
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Back</Button>
          <Button onClick={handleUpdate} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default UpdatePost;

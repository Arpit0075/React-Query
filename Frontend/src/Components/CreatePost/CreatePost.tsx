import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { useCreatePost } from "../Hooks/useCreatePost";
import { PostStateType } from "../../types/PostStateType";
function CreatePost() {
  const [post, setPost] = useState<PostStateType>({ title: "", body: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };
  const { mutation } = useCreatePost();

  const handleCreate = () => {
    mutation.mutate(post);
    setPost({ title: "", body: "" });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        marginTop: "1rem",
      }}
    >
      <TextField
        sx={{
          input: { color: "whitesmoke" },
          label: { color: "whitesmoke" },
          fieldset: { borderColor: "whitesmoke" },
        }}
        label="Title"
        variant="outlined"
        name="title"
        value={post.title}
        onChange={handleChange}
        autoComplete="off"
      />
      <TextField
        sx={{
          input: { color: "whitesmoke" },
          label: { color: "whitesmoke" },
          fieldset: { borderColor: "whitesmoke" },
        }}
        label="Body"
        variant="outlined"
        name="body"
        value={post.body}
        onChange={handleChange}
        autoComplete="off"
      />
      <Button variant="contained" onClick={handleCreate}>
        Create
      </Button>
    </div>
  );
}

export default CreatePost;

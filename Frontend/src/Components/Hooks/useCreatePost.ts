import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PostStateType } from "../../types/PostStateType";
import { createPost } from "../../api/posts";

export const useCreatePost = () => {
  const navigate = useNavigate();
  const client = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newPost: PostStateType) => createPost(newPost),
    onSuccess: () => {
      // Success actions
      //we have to use a fn for use invalidateQueries so that navigate run only after its above function has been executed
      () => client.invalidateQueries({ queryKey: ["posts"] });
      navigate("/");
    },
  });

  return { mutation };
};

import { useNavigate } from "react-router-dom";
import { deletePost } from "../../api/posts";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeletePost = () => {
  const navigate = useNavigate();
  const client = useQueryClient();

  const mutation = useMutation({
    mutationFn: (postId: string) => deletePost(postId),
    onSuccess: () => {
      // Success actions
      //we have to use a fn for use invalidateQueries so that navigate run only after its above function has been executed
      () => client.invalidateQueries({ queryKey: ["posts"] });
      navigate("/");
    },
  });

  return { mutation };
};

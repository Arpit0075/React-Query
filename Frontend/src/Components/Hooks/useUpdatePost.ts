import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdatedPostType } from "../../types/UpdatedPostType";
import { updatePost } from "../../api/posts";

export const useUpdatePost = () => {
  const navigate = useNavigate();
  const client = useQueryClient();

  const mutation = useMutation({
    mutationFn: (updatedPost: UpdatedPostType) => updatePost(updatedPost),
    onSuccess: () => {
      // Success actions
      //we have to use a fn for use invalidateQueries so that navigate run only after its above function has been executed
      () => client.invalidateQueries({ queryKey: ["posts"] });
      navigate("/");
    },
  });

  return { mutation };
};

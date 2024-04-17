import { useQuery } from "@tanstack/react-query";
import { getPost } from "../../api/posts";

export const useGetPost = (id: string) => {
  //get particular post based on postId
  const {
    data: post,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPost(id),
    // onSuccess: (data) => {
    // },
  });

  return { post, isLoading, isError };
};

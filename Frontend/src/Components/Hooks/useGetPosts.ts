import { PostType } from "../../types/postType";
import { BASE_URL } from "../../utils/url";
import { useQuery } from "@tanstack/react-query";

//NOTE: Error handling in react query FE
export const useGetPosts = () => {
  let url = BASE_URL + "posts";

  const { data, isLoading, isError, isSuccess, error } = useQuery({
    queryKey: ["posts"],
    queryFn: async (): Promise<PostType[] | any> => {
      const res = await fetch(url);

      if (!res.ok) {
        // console.log(res);
        if (res.status >= 500) {
          let text = await res.text();
          let parsedText = JSON.parse(text).error;

          throw new Error(parsedText);
        }
        let text = await res.text();
        let parsedText = JSON.parse(text).message;

        throw new Error(parsedText);
      }

      const response = await res.json();

      return { posts: response.posts, message: response.message };
    },
  });
  //console.log(data);
  // console.log(error);
  // console.log(isError);

  return { data, isLoading, isError, isSuccess, error };
};

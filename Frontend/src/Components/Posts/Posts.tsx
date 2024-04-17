import { useGetPosts } from "../Hooks/useGetPosts";
import Post from "./subcomponents/Post";

function Posts() {
  const {
    data,
    isLoading,
    isError,
    error,
  }: { data: any; isLoading: any; isError: any; error: any } = useGetPosts();
  // console.log(data);
  return (
    <div>
      Posts List
      {isLoading && <h3>Loading.....</h3>}
      {isError && <h3>{error?.message}</h3>}
      <h6>Message: {data?.message}</h6>
      {data?.posts && (
        <div
          style={{
            margin: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {data?.posts?.map((post: any, i: number) => {
            return <Post key={i} post={post} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Posts;

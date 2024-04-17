import { BASE_URL } from "../utils/url";
import { PostStateType } from "../types/PostStateType";
import { PostType } from "../types/postType";
import { UpdatedPostType } from "../types/UpdatedPostType";

export const createPost = async (newPost: PostStateType) => {
  let url = BASE_URL + "posts";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token")!!,
    },
    body: JSON.stringify(newPost),
  });
  return response.json();
};

export const deletePost = async (postId: string): Promise<any> => {
  let url = BASE_URL + `posts/${postId}`;
  await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token")!!,
    },
  });
};

export const getPost = async (postId: string): Promise<PostType> => {
  let url = BASE_URL + `posts/${postId}`;
  const res = await fetch(url);
  return res.json();
};

export const updatePost = async (updatedPost: UpdatedPostType) => {
  let url = BASE_URL + `posts/${updatedPost.postId}`;
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token")!!,
    },
    body: JSON.stringify(updatedPost),
  });
  return response.json();
};

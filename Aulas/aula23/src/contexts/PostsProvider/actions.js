import * as types from "./types";

export const loadPosts = async (dispacth) => {
  const postsRaw = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await postsRaw.json();
  dispacth({ type: types.POSTS_SUCCESS, payload: posts });
};

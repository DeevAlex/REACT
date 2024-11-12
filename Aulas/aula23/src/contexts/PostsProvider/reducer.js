import * as types from "./types";

export const reducer = (state, action) => {
  switch (action.type) {
    case types.POSTS_SUCCESS: {
      console.log(action);
      return { ...state, posts: action.payload };
    }
  }

  console.log("Não foi encontrada a action", action.type);
  return { ...state };
};

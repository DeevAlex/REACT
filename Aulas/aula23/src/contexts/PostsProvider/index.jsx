import { PostsContext } from "./context";
import P from "prop-types";

export const PostsProvider = ({ children }) => {
  return <PostsContext.Provider>{children}</PostsContext.Provider>;
};

PostsProvider.propTypes = {
  children: P.node.isRequired,
};

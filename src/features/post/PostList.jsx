import React from "react";
import { useSelector } from "react-redux";
import { getAllPosts } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButton";
const PostList = () => {
  const posts = useSelector(getAllPosts);

  const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date));
  const showAllPost = orderedPosts.map((post) => {
    return (
      <article className="mb-3" key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
        <ReactionButtons post={post} />
      </article>
    );
  });
  return (
    <div>
      <h2>Posts</h2>
      {showAllPost}
    </div>
  );
};

export default PostList;

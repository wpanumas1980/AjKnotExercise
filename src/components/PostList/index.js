import React from "react";
import posts from "../../mocks/posts";

function PostList() {
  return (
    <div className="post-list">
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            title={post.title}
            description={post.description}
            author={post.author}
          />
        );
      })}
    </div>
  );
}

function Post(props) {
  const { title, description, author } = props;
  return (
    <div className="post">
      <h1>{title}</h1>
      <p>{description}</p>
      <p>Author: {author}</p>
      <ActionMenu />
    </div>
  );
}

function ActionMenu() {
  return (
    <div className="actions">
      <button>edit</button>
      <button>delete</button>
    </div>
  );
}

export default PostList;

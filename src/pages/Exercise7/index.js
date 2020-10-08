import React, { useState } from "react";
import PostList from "../../components/PostList";
import Instruction from "../../components/Instruction";

import mockedPosts from "../../mocks/posts";

function Exercise7() {
  const [user, setUser] = useState("John");
  const [posts, setPosts] = useState(mockedPosts);

  return (
    <div className="page-container">
      <div className="theme-button"></div>
      <Instruction
        topic="Posts App"
        description="Action menu need user state to show 'You are John' instead of 'You are ...', So Context API ?"
      />
      <PostList posts={posts} />
    </div>
  );
}

export default Exercise7;

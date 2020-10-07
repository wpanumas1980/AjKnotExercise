import React from "react";
import PostList from "../../components/PostList";
import Instruction from "../../components/Instruction";

function Exercise6() {
  return (
    <div className="container">
      <Instruction
        topic="Posts App"
        description="Refactor Posts App at components/PostList/index.js List into Hook fashion"
      />
      <PostList />
    </div>
  );
}

export default Exercise6;

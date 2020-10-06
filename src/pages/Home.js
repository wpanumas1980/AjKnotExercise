import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to React Exercise</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Link to="/exercise-1">Exercise #1</Link>
        <Link to="/exercise-2">Exercise #2</Link>
        <Link to="/exercise-3">Exercise #3</Link>
        <Link to="/exercise-4">Exercise #4</Link>
        <Link to="/exercise-5">Exercise #5</Link>
        <Link to="/exercise-6">Exercise #6</Link>
      </div>
    </div>
  );
}

export default Home;

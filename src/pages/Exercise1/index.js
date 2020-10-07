import React from "react";
import Counter from "../../components/Counter";
import Instruction from "../../components/Instruction";
import "./index.css";

function Exercise1() {
  return (
    <div className="excercise-1-container">
      <Instruction
        topic="Counter App"
        description="Refactor Counter App at components/Counter/index.js in Hook fashion"
      />
      <Counter />
    </div>
  );
}

export default Exercise1;

import React from "react";
import Form from "../../components/Form";
import Instruction from "../../components/Instruction";
import "./index.css";

function Exercise5() {
  return (
    <div className="exercise-5-container">
      <Instruction
        topic="Signup App"
        description="Refactor Signup at components/Form/index.js List into Hook fashion"
      />
      <div className="exercise-5-content">
        <Form />
      </div>
    </div>
  );
}

export default Exercise5;

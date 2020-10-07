import React from "react";
import "./index.css";

function Instruction(props) {
  return (
    <div className="instruction-container">
      <h1 className="instruction-heading">{props.topic}</h1>
      <p className="instruction-description">{props.description}</p>
    </div>
  );
}

export default Instruction;

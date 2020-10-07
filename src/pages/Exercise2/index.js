import React from "react";
import Instruction from "../../components/Instruction";
import ColorPicker from "../../components/ColorPicker";

function Exercise2() {
  return (
    <div>
      <Instruction
        topic="Color Picker App"
        description="Refactor Color Picker at components/ColorPicker/index.js in Hook fashion"
      />
      <ColorPicker />
    </div>
  );
}

export default Exercise2;

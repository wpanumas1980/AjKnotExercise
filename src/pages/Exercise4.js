import React from "react";
import MonsterTable from "../components/MonsterTable";
import monsters from "../mocks/monsters";

function Exercise4() {
  return (
    <div>
      <h1>Refactor Monster Table List into hooks fashion</h1>
      <MonsterTable monsters={monsters} />
    </div>
  );
}

export default Exercise4;

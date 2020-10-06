import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Exercise1 from "./pages/Exercise1";
import Exercise2 from "./pages/Exercise2";
import Exercise3 from "./pages/Exercise3";
import Exercise4 from "./pages/Exercise4";
import Exercise5 from "./pages/Exercise5";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/exercise-5" component={Exercise5} />
        <Route path="/exercise-4" component={Exercise4} />
        <Route path="/exercise-3" component={Exercise3} />
        <Route path="/exercise-2" component={Exercise2} />
        <Route path="/exercise-1" component={Exercise1} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

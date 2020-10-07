import React from "react";
import "./index.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.addCounter = this.addCounter.bind(this);
    this.subtractCounter = this.subtractCounter.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
  }

  addCounter() {
    this.setState((state) => {
      return {
        counter: state.counter + 1,
      };
    });
  }

  subtractCounter() {
    this.setState((state) => {
      return {
        counter: state.counter - 1,
      };
    });
  }

  resetCounter() {
    this.setState((state) => {
      return {
        counter: 0,
      };
    });
  }

  render() {
    return (
      <div className="counter-app">
        <h2 className="counter-value">{this.state.counter}</h2>
        <div className="counter-menu">
          <button className="counter-add-button" onClick={this.addCounter}>
            +
          </button>
          <button
            className="counter-subtract-button"
            onClick={this.subtractCounter}
          >
            -
          </button>
          <button className="counter-reset-button" onClick={this.resetCounter}>
            reset
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;

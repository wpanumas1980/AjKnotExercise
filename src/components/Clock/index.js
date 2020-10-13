import React, { useState, useEffect } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());
  const tick = () => { setDate(new Date()) }
  const [clockId, setClockId] = useState(0);

  useEffect(() => {
    console.log(`Use Effect...`);
    const timerId = setInterval(() => {
      tick()
    }, 1000);
    setClockId(timerId);
    return () => {
      console.log(`clean up...`);
      clearInterval(timerId);
    }
  }, [])

  return (
    <>
      <button onClick={() => { clearInterval(clockId) }}>Clear</button>
      <h1
        style={{
          textAlign: "center",
          fontSize: "60px",
          color: "lightseagreen",
        }}
      >
        {date.toLocaleTimeString()}
      </h1>
    </>
  );

}
/*
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
    this.tick = this.tick.bind(this);
  }
 
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick();
    }, 1000);
  }
 
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
 
  tick() {
    this.setState(() => {
      return {
        date: new Date(),
      };
    });
  }
 
  render() {
    return (
      <h1
        style={{
          textAlign: "center",
          fontSize: "60px",
          color: "var(--main-branding-color-500)",
        }}
      >
        {this.state.date.toLocaleTimeString()}
      </h1>
    );
  }
}
 
export default Clock;
*/
export default Clock;
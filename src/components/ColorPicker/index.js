import React from "react";

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
    };

    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleColorChange(e) {
    this.setState({
      color: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1 style={{ color: this.state.color }}>COLORFUL</h1>
        <input type="color" onChange={this.handleColorChange} />
      </div>
    );
  }
}

export default ColorPicker;

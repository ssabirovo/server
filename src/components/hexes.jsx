import { Component } from "react";
import Hex from "./hex";
import { generateColor } from "../utils/generate-color";
import "./hexes.scss";

class Hexes extends Component {
  state = {
    bgColor: "#fff",
    colors: Array(6).fill().map(generateColor),
  };

  handleSelect = (newBgColor) => {
    console.log("newBgColor = ", newBgColor);
    this.setState({ bgColor: newBgColor });
  };

  handleRefresh = () => {
    const newColors = Array(6).fill().map(generateColor);
    this.setState({ bgColor: "#fff", colors: newColors });
  };

  render() {
    return (
      <div className='wrapper' style={{ background: this.state.bgColor }}>
        <h1>{this.state.bgColor}</h1>
        <div className='hexes'>
          {console.log("log-28")}
          {this.state.colors.map((color) => (
            <Hex color={color} onSelect={this.handleSelect} />
          ))}
          {console.log("log-31")}
        </div>
        <button onClick={this.handleRefresh} className='btn btn-lg btn-primary'>
          Refresh
          {console.log("log-35")}
        </button>
      </div>
    );
  }
}

export default Hexes;

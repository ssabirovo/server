import { Component } from "react";
import Hex from "./hex";
import { generateColor } from "../utils/generate-color";
import "./hexes.scss";

const colors = Array(6).fill().map(generateColor);
class Hexes extends Component {
  state = {
    bgColor: "#fff",
  };

  handleSelect = (newBgColor) => {
    console.log("newBgColor = ", newBgColor);
    this.setState({ bgColor: newBgColor });
  };

  handleRefresh = () => {
    this.setState({ bgColor: "#fff" });
  };

  render() {
    console.log("colors =", colors);
    return (
      <div className='wrapper' style={{ background: this.state.bgColor }}>
        <h1>{this.state.bgColor}</h1>
        <div className='hexes'>
          {colors.map((color) => (
            <Hex key={color} color={color} onSelect={this.handleSelect} />
          ))}
        </div>
        <button onClick={this.handleRefresh} className='btn btn-lg btn-primary'>
          Refresh
        </button>
      </div>
    );
  }
}

export default Hexes;

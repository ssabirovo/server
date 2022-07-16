import React from "react";
import logo from "./logo512.png";

export default class Box extends React.Component {
  width = 60;
  height = 101;

  render() {
    return (
      <>
        <h1>Box is {this.isBig(this.height, this.width)}</h1>
        <img
          style={{ color: "red", width: 20, height: 20, border: "1px solid" }}
          src={logo}
          alt='Img not found'
        />
      </>
    );
  }

  isBig(height, width) {
    if (height > 100 || width > 100) return "BIG";
    return "SMALL";
  }
}

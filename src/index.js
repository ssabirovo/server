import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

// function Box(name, size) {
//   console.log(this);
//   this.name = name;
//   this.size = size;
// }

// Box.prototype.showData = function () {
//   console.log(`name = ${this.name}`);
//   console.log(`size = ${this.size}`);
// };

// const box = new Box("Box-1", 200);
// const showData = box.showData.bind(box);
// showData();

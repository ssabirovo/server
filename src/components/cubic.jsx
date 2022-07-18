import { Component } from "react";

class Cubic extends Component {
  constructor(count) {
    super();
  }

  getCount() {
    const count = this.count;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClass() {
    const className = "badge badge-lg p-2 me-2 bg-";
    return className + (this.count === 0 ? "dark" : "warning");
  }

  render(color = "primary") {
    return (
      <>
        <span className={this.getBadgeClass()}>{this.getCount()}</span>
        <button className={`btn btn-${color}`}>Increment</button>
      </>
    );
  }
}

export default Cubic;

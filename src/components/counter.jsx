import { Component } from "react";

class Counter extends Component {
  getCount() {
    const count = this.props.count;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClass() {
    const className = "badge badge-lg p-2 me-2 bg-";
    return className + (this.props.count === 0 ? "dark" : "warning");
  }

  render() {
    console.log("this.props = ", this.props);
    return (
      <div className='my-2'>
        <span className={this.getBadgeClass()}>{this.getCount()}</span>
        <button className={`btn btn-${this.props.color}`}>Increment</button>
      </div>
    );
  }
}

export default Counter;

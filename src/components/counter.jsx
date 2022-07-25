import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 20,
  };

  getCount = () => {
    const count = this.state.count;
    return count === 0 ? "Zero" : count;
  };

  getBadgeClass = () => {
    const className = "badge badge-lg p-2 me-2 bg-";
    const types = [
      "dark",
      "info",
      "danger",
      "primary",
      "success",
      "warning",
      "secondary",
    ];
    const ranIdx = Math.floor(Math.random() * types.length);
    return className + types[ranIdx];
  };

  handleClick = (num = 1) => {
    // this.state.count = this.state.count + num;
    this.setState({ count: this.state.count + num });
    // console.log(this.state);
  };

  render() {
    return (
      <div className='my-2'>
        <span className={this.getBadgeClass()}>{this.getCount()}</span>
        <button
          className='btn btn-primary'
          onClick={() => this.handleClick(20)}>
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;

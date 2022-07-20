import React, { Component } from "react";

class Counter extends Component {
  count = 20;

  getCount = () => {
    const count = this.count;
    return count === 0 ? "Zero" : count;
  };

  getBadgeClass = () => {
    const className = "badge badge-lg p-2 me-2 bg-";
    return className + (this.count === 0 ? "dark" : "info");
  };

  handleClick = () => {
    console.log("this = ", this);
    // this.count = 100;
    // const jsxElement = this.render();
    // this.count = Math.random();
  };

  render() {
    console.log(this);
    return (
      <div className='my-2'>
        <span className={this.getBadgeClass()}>{this.getCount()}</span>
        <button className='btn btn-primary' onClick={this.handleClick}>
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;

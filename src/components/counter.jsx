import { Component } from "react";

class Counter extends Component {
  state = {
    color: "red",
  };
  getCount = () => {
    const count = this.props.counter.value;
    return count === 0 ? "Zero" : count;
  };

  getBadgeClass = () => {
    const className = "badge badge-lg p-2 me-2 bg-";
    return className + (this.props.counter.value === 0 ? "dark" : "info");
  };

  render() {
    const { counter, onIncrement, onDecrement, onDelete } = this.props;
    return (
      <div className='my-2'>
        <span className={this.getBadgeClass()}>{this.getCount()}</span>
        <button
          className='btn btn-primary'
          onClick={() => onIncrement(counter.id)}>
          Increment
        </button>
        <button
          className='btn btn-primary ms-2'
          onClick={() => onDecrement(counter.id)}>
          Decrement
        </button>
        <button
          className='btn btn-danger ms-2'
          onClick={() => onDelete(counter.id)}>
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;

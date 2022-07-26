import { Component } from "react";

class Foo extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
    this.setState(({ count }) => ({ count: count + 2 }));
    this.setState(({ count }) => ({ count: count + 3 }));
    this.setState(({ count }) => ({ count: count + 4 }));
  };

  render() {
    console.log("rendering....");
    const { count } = this.state;
    return (
      <div className='p-4'>
        <button className='btn btn-primary' onClick={this.handleIncrement}>
          {count}
        </button>
      </div>
    );
  }
}

export default Foo;

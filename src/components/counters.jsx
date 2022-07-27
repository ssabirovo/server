import { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  constructor() {
    super();
    console.log("Counters Constructor");
  }

  componentDidMount() {
    console.log("Counters Did Mount");
  }
  
  render() {
    console.log("Counters Render");

    const { counters, onReset, onDelete, onDecrement, onIncrement } =
      this.props;
    return (
      <div className='p-3'>
        <button className='btn btn-primary' onClick={onReset}>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

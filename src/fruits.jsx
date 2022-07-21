import { Component } from "react";

class Fruits extends Component {
  state = {
    fruits: [
      { id: 1, name: "Uzum", icon: "🍇" },
      { id: 2, name: "Olma", icon: "🍎" },
      { id: 3, name: "Qulupnay", icon: "🍓" },
      { id: 4, name: "Olcha", icon: "🍒" },
    ],
  };

  handleDelete = (selectedID) => {
    const tempFruits = this.state.fruits.filter(
      (fruit) => fruit.id !== selectedID
    );
    this.setState({ fruits: tempFruits });
    // console.log("fruits = ", this.state.fruits);
    // console.log(`selectedID = ${selectedID}`);
  };

  render() {
    const { fruits } = this.state;
    return (
      <ul className='list-group'>
        {fruits.map((fruit) => (
          <li
            key={fruit.id}
            className='list-group-item d-flex justify-content-between'>
            <span>
              {fruit.id}--{fruit.icon} - {fruit.name}
            </span>
            <button
              onClick={() => this.handleDelete(fruit.id)}
              className='btn btn-sm btn-danger'>
              X
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default Fruits;

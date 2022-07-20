import { Component } from "react";

class Fruits extends Component {
  fruits = [
    { name: "Uzum", icon: "🍇" },
    { name: "Olma", icon: "🍎" },
    { name: "Qulupnay", icon: "🍓" },
    { name: "Olcha", icon: "🍒" },
  ];

  render() {
    return (
      <ul className='list-group'>
        {this.fruits.map((fruit) => (
          <li className='list-group-item d-flex justify-content-between'>
            <span>
              {fruit.icon} - {fruit.name}
            </span>
            <button className='btn btn-sm btn-danger'>X</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default Fruits;

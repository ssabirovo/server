import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/base.scss";
import NavBar from "./components/nav-bar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 20 },
      { id: 2, value: 30 },
      { id: 3, value: 50 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (selectedID) => {
    const counters = this.state.counters.filter(({ id }) => id !== selectedID);
    this.setState({ counters });
  };

  handleReset = () => {
    this.state.counters.forEach((counter) => (counter.value = 0));
    this.setState(this.state);
  };

  handleIncrement = (selectedID) => {
    const idx = this.state.counters.findIndex(({ id }) => id === selectedID);
    const counter = this.state.counters[idx];
    counter.value++;
    this.setState(this.state);
  };

  handleDecrement = (selectedID) => {
    const idx = this.state.counters.findIndex(({ id }) => id === selectedID);
    const counter = this.state.counters[idx];
    if (counter.value !== 0) {
      counter.value--;
      this.setState(this.state);
    }
  };

  render() {
    const amount = this.state.counters.filter(({ value }) => value > 0).length;
    return (
      <>
        <NavBar amount={amount} />
        <Counters
          counters={this.state.counters}
          onDelete={this.handleDelete}
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;

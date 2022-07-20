import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Fruits from "./fruits";
import Counter from "./counter";

class App extends Component {
  render() {
    return (
      <div className='container p-4'>
        {/* <Fruits /> */}
        <Counter />
      </div>
    );
  }
}

export default App;

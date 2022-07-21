import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Fruits from "./fruits";
import Counter from "./counter";
import Hexes from "./components/hexes";
import "./assets/styles/base.scss";

class App extends Component {
  render() {
    return <Hexes />;
    // return (
    //   <div className='container p-4'>
    //     {/* <Fruits /> */}
    //     {/* <Counter />
    //     <Counter />
    //     <Counter />
    //     <Counter /> */}
    //     <Hexes />
    //   </div>
    // );
  }
}

export default App;

// [1, 2, 3].map((num, idx) => {});

import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Fruits from "./fruits";
// import Counter from "./counter";
import "./assets/styles/base.scss";

class App extends Component {
  state = {
    names: ["arslonbek", "boburbek", "jamshid", "avazbek"],
  };

  handleRemove = (selectedIdx) => {
    const names = this.state.names.filter((name, idx) => selectedIdx !== idx);
    this.setState({ names });
  };

  handleToggle = (selectedIdx) => {
    const names = this.state.names;
    const prevIdx = selectedIdx - 2;
    const temp = names[selectedIdx];
    names[selectedIdx] = names[prevIdx];
    names[prevIdx] = temp;
    this.setState({ names });
  };

  render() {
    const { names } = this.state;
    return (
      <div className='parent'>
        <div>Kun.uz</div>
        {names.map((name, idx) => (
          <div key={name} className={name}>
            {name}
            <button onClick={() => this.handleRemove(idx)}>X</button>
            <button onClick={() => this.handleToggle(idx)}>Toggle Top</button>
          </div>
        ))}
      </div>
    );
  }
}

export default App;

// VD1
<div>
  <div>kun.uz</div>
  <div key='arslonbek'>
    1-arslonbek<button>x-1</button>
  </div>
  <div key='boburbek'>
    2-boburbek<button>x-2</button>
  </div>
  <div key='jamshid'>
    3-jamshid<button>x-3</button>
  </div>
  <div key='avazbek'>
    4-avazbek<button>x-4</button>
  </div>
</div>;
// VD2
<div>
  <div>kun.uz</div>
  <div key='arslonbek'>
    arslonbek<button>x-1</button>
  </div>
  <div key='jamshid'>
    jamshid<button>x-3</button>
  </div>
  <div key='avazbek'>
    avazbek<button>x-4</button>
  </div>
</div>;

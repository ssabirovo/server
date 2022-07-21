import { Component } from "react";

class Hex extends Component {
  render() {
    return (
      <button
        className='btn p-3'
        onClick={() => this.props.onSelect(this.props.color)}
        style={{ background: this.props.color }}
        children={this.props.color}
      />
    );
  }
}

export default Hex;

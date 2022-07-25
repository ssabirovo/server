import { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav class='navbar navbar-light bg-light'>
        <div class='container-fluid justify-content-start'>
          <b class='navbar-brand'>Counters</b>
          <span class='badge badge-lg bg-success'>
            {this.props.amount || 0}
          </span>
        </div>
      </nav>
    );
  }
}

export default NavBar;

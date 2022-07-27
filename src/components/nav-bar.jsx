import { Component } from "react";

class NavBar extends Component {
  constructor() {
    super();
    console.log("NavBar Constructor");
  }

  componentDidMount() {
    console.log("NavBar Did Mount");
  }

  render() {
    console.log("NavBar Render");
    return (
      <nav className='navbar navbar-light bg-light'>
        <div className='container-fluid justify-content-start'>
          <b className='navbar-brand'>Counters</b>
          <span className='badge badge-lg bg-success'>
            {this.props.amount || 0}
          </span>
        </div>
      </nav>
    );
  }
}

export default NavBar;

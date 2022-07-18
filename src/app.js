import React, { Component } from "react";
import Counter from "./components/counter";

class App extends Component {
  render(root) {
    return (
      <main className='container py-2'>
        <Counter count={20} color='success' />
        <Counter count={20} color='primary' />
        <Counter count={200} color='warning' />
      </main>
    );
  }
}

export default App;

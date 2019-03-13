import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchfield: ''
    };
  }
  render() {
    return (
      <div className="App">
        <h1 class='tc'>Movie Search</h1>
      </div>
    );
  }
}

export default App;

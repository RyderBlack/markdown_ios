import React, { Component } from 'react';
import './App.css';
import coins from "./startupopenhouse-mtl2018";
import Details from './components/Details'
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      coins: coins
    }
  }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container-fluid detail-container">
          <Details details={this.state.coins} />
        </div>
      </div>
    );
  }
}

export default App;

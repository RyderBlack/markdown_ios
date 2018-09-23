import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import startups from "./startupopenhouse-mtl2018";
//import Details from "./components/Details";
import Details from './components/Details'
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startups: startups
    }
  }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
          <Details details={this.state.startups} />
        </div>
      </div>
    );
  }
}

export default App;

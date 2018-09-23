import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import startups from "./startupopenhouse-mtl2018";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startups: startups
    }
  }

  componentDidMount() {
    const config = {
      headers: {
        accept: 'application/json',
      },
      data: {}
    };
    fetch('https://api.startupopenhouse.com/v1/',config)
    .then(res => {
      console.log(res.url)
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.state.startups.map((startup) => {
          const linkImg = 'https://images.startupopenhouse.com/thumbnail?colorspace=srgb&width=128&url=https://s3.amazonaws.com/soh-pwa-files-production/';
          //console.log(startup.props.logo_square.props.uri)
          return (
            <div key={startup.props.id}>
              <img src={linkImg+ startup.props.logo_square.props.uri} alt="logo"/>
              <p className="App-intro" >{startup.props.name}</p>
            </div>
          )
        })}
        {/*console.log(this.state.startups)*/}
        
      </div>
    );
  }
}

export default App;

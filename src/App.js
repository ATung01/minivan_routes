import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map'
import Waypoint from './components/Waypoint.js'
console.log(process.env.REACT_APP_API_KEY)


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Map/>
        <Waypoint/>
      </div>
    );
  }
}

export default App;

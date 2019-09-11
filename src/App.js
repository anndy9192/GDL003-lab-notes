import React, { Component } from 'react';
import './App.css';
//import Title from './Components/Holi';
import Login from "./Components/login";
import Hello from './Components/configdb';

class App extends Component {
  
  render() {
    return (

      <div className="App">
        <Login/>     
      </div>
    )
  }
}

export default App;

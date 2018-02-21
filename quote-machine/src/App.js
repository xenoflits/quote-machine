import React, { Component } from 'react';
import Quotes from './components/Quotes'
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
      <div className="header">
      <h1>Random Quote Machine</h1>
      </div>
      
      <Quotes />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { GestureApp } from './components/gesture_app';

class App extends Component {

  
  render() {
    return (
      <div className="App">
        <GestureApp />
      </div>
    );
  }
}

export default App;

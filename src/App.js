import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Tournaments from './components/Tournaments.jsx';
import Matches from './components/Matches.jsx';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Tournaments />
        <Matches />
      </div>
    );
  }
}

export default App;

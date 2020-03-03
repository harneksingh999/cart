import React, { Component } from 'react';
import './App.css';
import Header from './Validation/Header'
import Login from './Validation/login'


class App extends Component {

  render() {
    return (
      <div className="App">
         <Header/>
         <Login/>
      </div>
    );
  }
}

export default App; 

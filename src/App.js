import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login/login'
import {BrowserRouter, Route} from 'react-router-dom';
import Register from './Components/Register/Register'
import Dashboard from './Components/Dashboard/Dashboard'


class App extends Component {

  render() {
    return (

      <BrowserRouter>
      <div className="App">
         <Route path ="/" component={Login}exact/>
         <Route path="/register" component ={Register}/>
         <Route path ="/dashboard" component={Dashboard}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App; 

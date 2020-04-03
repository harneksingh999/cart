import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login/login'
import {BrowserRouter, Route} from 'react-router-dom';
import Register from './Components/Register/Register'
import Dashboard from './Components/Dashboard/Dashboard'
import Inventory from './Components/Inventory/Inventory'
import Electronics from './Components/Electronics/Electronics';
import Men from './Components/Men/Men'
import Details from './Components/Details/Details'


class App extends Component {

  render() {
    return (

      <BrowserRouter>
      <div className="App">
         <Route path ="/login" component={Login}/>
         <Route path="/register" component ={Register}/>
         <Route path ="/" component={Dashboard} exact/>
         <Route path ="/inventory" component={Inventory}/>
         <Route path ="/electronics" component={Electronics}/>
         <Route path ="/men" component={Men}/>
         <Route path ="/details" component={Details}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App; 

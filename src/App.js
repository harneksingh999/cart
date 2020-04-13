import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login/login'
import {BrowserRouter, Route} from 'react-router-dom';
import Register from './Components/Register/Register'
import Dashboard from './Components/Dashboard/Dashboard'
import Inventory from './Components/Inventory/Inventory'
import Men from './Components/Men/Men'
import Phones from './Components/Phones/Phones'
import Details from './Components/Details/Details'
import Cart from './Components/Cart/Cart'



class App extends Component {

  render() {
    return (

      <BrowserRouter>
      <div className="App">
         <Route path ="/login" component={Login}/>
         <Route path="/register" component ={Register}/>
         <Route path ="/" component={Dashboard} exact/>
         <Route path ="/inventory" component={Inventory}/>
         <Route path ="/men" component={Men}/>
         <Route path ="/phones" component={Phones}/>
         <Route path ="/details" component={Details}/>
         <Route path ="/cart" component={Cart}/>
         
      </div>
      </BrowserRouter>
    );
  }
}

export default App; 

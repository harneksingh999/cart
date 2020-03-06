import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login/login'
import {BrowserRouter, Route} from 'react-router-dom';
import Register from './Components/Register/Register'


class App extends Component {

  render() {
    return (

      <BrowserRouter>
      <div className="App">
        
         {/* <Login/> */}
         <Route path ="/" component={Login}exact/>
         <Route path="/register" component ={Register}/>

      </div>
      </BrowserRouter>
    );
  }
}

export default App; 

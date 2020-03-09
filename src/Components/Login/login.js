import React, { Component } from'react';
import './login.css';

import {NavLink} from "react-router-dom"
import { Redirect} from "react-router-dom"

const initialState = {
  email:"",
  password:"",
  emailError:"  ",
  passwordError:"",
  overallError:"",
  toDashboard:false
}

class Login extends Component {
     state= initialState
     patterns={
      e:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
      p:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}$/
     }


    handleChange =(event)=>{
      this.setState({email:event.target.value}, ()=>{
        if(!this.valid(this.state.email,this.patterns.e)) {
          this.setState({emailError:"Invalid Email"})

        }  else {
          this.setState({emailError:""})
        }
      })
    }
    
    handleChange1 =(event)=>{
      this.setState({password:event.target.value},()=>{
        if(!this.valid(this.state.password,this.patterns.p)){

          this.setState({passwordError:"Invalid Password"})
        }
        else{
          this.setState({passwordError:""})
        }
      })
    }
     valid(field,regex) {
       return regex.test(field)
    }


  handleSubmit =(event)=>{
  event.preventDefault();
       if(this.state.email===""|| this.state.password==="" ||this.state.emailError==="Invalid Email" || this.state.passwordError==="Invalid Password"){
          console.log("Invalid Form");
          // this.setState({overallError:"Enter email id and password"})
          alert("Please Enter email Id and Password")
       }

       else{
        // console.log(this.state);
        console.log(localStorage);
        // localStorage.clear();
        // this.setState(initialState)
        
         for(let i=0;i<localStorage.length;i++){
             let key = localStorage.key(i);
             console.log((`${localStorage.getItem(key)}`),"value")
             console.log(JSON.parse(localStorage.getItem(key)).password,"object")
             if(this.state.email===key && this.state.password===JSON.parse(localStorage.getItem(key)).password){
                  //  this.setState({toDashboard:true})
                  //  console.log(this.state.toDashboard)
                  console.log("Successful")   
                 return this.setState({toDashboard:true});
             }
             else{
               console.log("unsuccssful") 
              //  alert("Not a registered user!! Please Register")
             }
         }

       }
  }

    render() { 
      if(this.state.toDashboard===true){
        // console.log(this.state.toDashboard)
        return <Redirect to ="/dashboard"/>
      }


      return (
        
    
            <div className="main">
            <div className="wrapper">
           <form onSubmit={this.handleSubmit}>

           <h1>Login Page</h1>
                
            <label>Email:</label> 
            <input className="email"
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            /> 
            <div className="emailError">{this.state.emailError}</div>
            <br />
            <label>Password:</label> 
            <input className ="pwd"
             type="text"
             name="Pwd"
             value={this.state.password}
             onChange={this.handleChange1}
      />
            <div className="passwordError">{this.state.passwordError}</div>

            {/* <div className="overallError">{this.state.overallError}</div> */}
             <br />

              <button className="btn">Submit </button>
              <div className="nav"><NavLink to ="/register">Register</NavLink></div>
               </form>
               </div>
               </div>


      
      );
    }
  }

export default Login; 







    
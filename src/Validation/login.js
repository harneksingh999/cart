import React, { Component } from'react';
import './login.css';

const initialState = {
  email:"",
  password:"",
  emailError:"  ",
  passwordError:""
}




class Login extends Component {
     state= initialState
    

     patterns={
      e:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

     }


    handleChange =(event)=>{
      this.setState({email:event.target.value})
    }
    
    handleChange1 =(event)=>{
      this.setState({password:event.target.value})
    }


     valid(field,regex) {
       console.log(regex.test(this.state.email))
     }


    Validate =() => {
      let emailError ="";
       // //  let passwordError="";
      //  console.log(this.valid(this.state.email,this.patterns.e),"tru false")

      if( !this.valid(this.state.email,this.patterns.e)){
            
        emailError="invalid Email"
      }
      

      //  if(!this.state.email.includes("@")){
      //    emailError="invalid Email"
      //  }

       if(emailError){
         this.setState({emailError})
         return false;
       }
       return true;

    };

  handleSubmit =(event)=>{
  event.preventDefault();
   const isValid=this.Validate();

   if(isValid){
     console.log(this.state);
     this.setState(initialState)
   }
  }




    render() {
      return (
        <div>
           <form onSubmit={this.handleSubmit}>
            <label>Email:</label> <input className="email"
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            /> <div>{this.state.emailError}</div><br />
            <label>Password:</label> <input className ="pwd"
             type="password"
             name="Pwd"
             value={this.state.password}
             onChange={this.handleChange1}
             /><div>{this.state.passwordError}</div> <br />
              <button>Submit </button>
               </form>

           
        </div>
      );
    }
  }

export default Login; 







    
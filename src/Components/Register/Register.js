import React, { Component } from'react';
import './Register.css';
import { Redirect} from "react-router-dom"


const initialsState={
    firstName:"",
    lastName:"",
    emailId:"",
    password:"",
    bith:"",
    firstNameError:"",
    lastNameError:"",
    emailIdError:"",
    passwordError:"",
    birthError:"",
    toMain:false
}
 

var currentDate = new Date()
class Register extends Component {

    state=initialsState;

     pattern={
         n:/^[a-zA-Z ]{4,10}$/,
         pattern_name: /^[a-z]{3,20}$/i,
         pattern_last: /^[a-z]{3,20}$/i,
         pattern_email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
         pattern_password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}$/
     }

     


      valid(field,regex) {
          console.log(regex.test(field))
          return regex.test(field)
      }
     

     handelChange=(event)=> {
         this.setState({firstName:event.target.value}, ()=>{
             if(!this.valid(this.state.firstName,this.pattern.pattern_name)){
                 this.setState({firstNameError:"First Name should have only Alphabets and have min 3 characters"})

             } else{
                 this.setState({firstNameError:""})
             }
         })
     } 

     handelChange1=(event)=> {
        this.setState({lastName:event.target.value}, ()=>{
            if(!this.valid(this.state.lastName,this.pattern.pattern_last)){
                this.setState({lastNameError:"Last Name should have only Alphabets and have min 3 characters"})

            } else{
                this.setState({lastNameError:""})
            }
        })
    } 

    handelChange2=(event)=> {
        this.setState({emailId:event.target.value}, ()=>{
            if(!this.valid(this.state.emailId,this.pattern.pattern_email)){
                this.setState({emailIdError:"invalid Email ID"})

            } else{
                this.setState({emailIdError:""})
            }
        })
    }
    
    handelChange3=(event)=> {
        this.setState({password:event.target.value}, ()=>{
            if(!this.valid(this.state.password,this.pattern.pattern_password)){
                this.setState({passwordError:"invalid Password"})

            } else{
                this.setState({passwordError:""})
            }
        })
    }

    handelChange4=(event)=>{
       this.setState({bith:event.target.value})
        var diff = currentDate.getUTCFullYear() - new Date(event.target.value).getUTCFullYear()

        if(diff<18 || diff>50){
             this.setState({birthError:"Age should be betweeen 18 and 50 years"})
        }else{
            this.setState({birthError:""})
        }
    }


      
       handleSubmit= (event)=>{
        event.preventDefault();

        if(this.state.firstName==="" || this.state.firstNameError==="Minimum 3 characters required" || this.state.lastNameError==="Minimum 3 characters required" || this.state.emailIdError==="invalid Email ID " || this.state.passwordError==="invalid Password" || this.state.birthError==="Age should be betweeen 18 and 50 years" || this.state.lastName==="" ||this.state.emailId==="" || this.state.password==="" || this.state.bith===""){
            console.log("invalid Form ")
            alert("Please fill all the Required Fields")
        }
         
        else{
            console.log(this.state)
            const key = this.state.emailId;
            localStorage.setItem(key,JSON.stringify(this.state))
            // localStorage.clear()
            console.log(localStorage)
            // this.setState(initialsState)
            this.setState({toMain:true})
        
        }
       }


    render(){

        if(this.state.toMain===true){
            return <Redirect to ="/login" />


        }

        return(
            <div className="main"> 
                <div className="form">
                    <h1>Registration</h1>
                <form onSubmit={this.handleSubmit} >
                <label>First Name:</label> <input className="name" type="text" name="Name" value={this.state.firstName} onChange={this.handelChange}/><br /><div className="firstname">{this.state.firstNameError}</div>
                 <label>Last Name:</label> <input className="last" type="text" name="Last" value={this.state.lastName} onChange={this.handelChange1}/><br/><div className="lastname">{this.state.lastNameError}</div>
                 <label>Email:</label> <input className="mail" type ="text" name="mail" value={this.state.emailId} onChange={this.handelChange2}/><br/> <div className="email">{this.state.emailIdError}</div>
                 <label>Password:</label> <input className="pwd" type ="password" name="pwd" value={this.state.password} onChange={this.handelChange3}/><br/><div className="pwd">{this.state.passwordError}</div>
                 <label>Date of Birth:</label> <input className="dob" type="date" name="birthday" onChange={this.handelChange4}/><br/> <div className="date">{this.state.birthError}</div>
                <input type ="radio" name="gender" value="male"/> <label htmlFor="male">Male</label><br/>
                <input type ="radio" name="gender" value="female"/> <label htmlFor="female">Female</label><br/>
                <input type ="radio" name="gender" value="other"/> <label htmlFor="other">Other</label><br/>
                <div><button className="btn">Submit</button></div>
            </form>

            </div>
        </div>
        )   
     

    }
}

export default Register

import React, { Component } from'react';
import  './Toolbar.css'
import logo from '../../images/logo.png'
import { Link} from "react-router-dom"
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'


import Modal from '../Modal/Modal'

class Toolbar extends Component{

  state={
    isOpen:false
  }

  render(){
      
      return(

        <div>
          <header className="Toolbar">
        <div>
             <DrawerToggleButton click={this.drawerClickHandler}/>
         </div>
         <div><img src={logo} width="80px" height="100px" ></img></div>
         <div className="logout" >
         <div className="ab">
           <button  onClick={(e)=> this.setState({isOpen:true})}>&#128722;</button>
           <Modal isOpen ={this.state.isOpen} onclose={(e)=>this.setState({isOpen:true})}>
             Welcome to you Modal
        


           </Modal>
           </div>
                   <div><Link to="/login"><button>
                     Log In
                      </button></Link></div>
                </div>
         </header>
           </div>
      )
}
}

export default Toolbar;
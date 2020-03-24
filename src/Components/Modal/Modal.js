import React, { Component } from'react';
import Basket from '../Basket/Basket'

let dialogStyles ={
    width:'500px',
    maxwidth:'100%',
    margin:'0 auto',
    position:'fixed',
    left:'50%',
    top:'50%',
    transform :'translate(-50%,-50%)',
    zIndex:'999',
    backgroundColor:'#6495ED',
    padding:'10px 20px 40px',
    borderRadius:'8px',
    display:'flex',
    flexDirection :'column'
};

let displayCloseStyles={
      marginBottom:'15px',
      padding:'3px 8px',
      cursor:'pointer',
      borderRadius:'50%',
      border:'none',
      width:'30px',
      height:'30px',
      fontWeight:'bold',
      alignSelf:'flex-end'

};

class Modal extends Component {

    render(){
         
        let modal= ( 
        <div style={dialogStyles}>
        <button style={displayCloseStyles} onClick={this.props.onClose}>X</button>
        <div>{this.props.children}</div>
        <div><Basket/></div>
        </div>);
        
        if(!this.props.isOpen){
            modal=null;
        }
        return(
           <div>
               {modal}
           </div>
        )   
    }
}
 export default Modal;


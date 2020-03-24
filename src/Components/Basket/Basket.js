import React, { Component } from 'react';
import './Basket.css'
import Modal from '../Modal/Modal'

class Basket extends Component {

    render(){
        const {cartItems}=this.props;
        return(
        
           <div className="message">
               <br></br> {cartItems.length===0?"cart is empty":<div  className="message1"> <br></br>you have {cartItems.length}items in the cart<br></br></div>}
               {cartItems.length>0 &&

               <div>
               <div  className="message1"> <br></br>
                  <ul>
                    {cartItems.map(item=>
                        <li>
                             <b>{item.title}</b>
                            X{item.count}
                        
                            <button onClick={(e)=>this.props.handleRemoveFromCart(e,item)}>X</button>
                        </li>)}

                  </ul>

               </div>
               </div>
               }
           </div>
    
        )



    }
}

export default Basket;
import React, { Component } from 'react';
import './Basket.css'

class Basket extends Component {

    render(){
        const {cartItems}=this.props;
        return(
           <div className="message">
               {cartItems.length===0?"cart is empty":<div  className="message">you have {cartItems.length}items in the cart</div>}
               {cartItems.length>0 &&
               <div  className="message">
                  <ul>
                    {cartItems.map(item=>
                        <li>
                            <b>{item.title}</b>
                            X{item.count}
                        
                            <button onClick={(e)=>this.props.handleRemoveFromCart(e,item)}>X</button>
                        </li>)}

                  </ul>

               </div>
               }
           </div>
        )



    }
}

export default Basket;
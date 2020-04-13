import React, { Component } from 'react';
import './Phonesrender.css'


class Phonesrender extends Component{
    render(){
    let phoneItem= this.props.phone.map(phone=>
       <div className="phonerender">
        <div>
        <a href ={`#${phone.id}`} onClick={console.log(phone.id)}>
                 <img src ={`/phones/${phone.sku}.png`} alt={phone.title}></img>
               <p>{phone.title}</p>
                 </a>  
                 <b>{phone.price}$</b>

                 <button className="phnbtn"
                 onClick={(e)=>this.props.handleAddToCart(e,phone)}
                 >Add to Cart </button> 
        </div>
        </div>)
            
            
        return(
               <div>
                  <div>
                      {phoneItem}
                  </div>
               </div>
                   
        )
    }
}

export default Phonesrender
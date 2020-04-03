import React from 'react';
import './Basket.css'
import { Link} from "react-router-dom"


let closebtn={
    marginBottom:'15px',
    padding:'3px 8px',
    cursor:'pointer',
    borderRadius:'50%',
    border:'none',
    width: '30px',
    height:'30px',
    alignSelf:'flex-end'
}

 const basket =(props)=>{

    
 const cartItems=props.cartItems.map(item=>
    <li>
         <b>{item.title}</b>&nbsp; &nbsp;
        {item.count}
    
        <button onClick={(e)=>props.handleRemoveFromCart(e,item)}>X</button>
    </li>)



        
        return(

           <div className="list">
               <button style={closebtn}>X</button>
               <p>Your Shopping  List </p>
            <ul>
               {cartItems}
           </ul>
           <p>Continue to shop more </p>
           <div><Link to ="/men"><button className="cont" onClick={console.log('hey')}>Continue</button></Link></div>

           </div>
        
        

        )
    
}

export default basket;
import React from 'react'
import './Products.css'
const products =(props) =>{

    // const transProducts = Object.keys(props.products)
    // .map(igKey =>{
    //     return [...Array(props.products[igKey])].map();
    // });
      return(
         <div className="prod">
             <div className="iphone">Apple X</div>
             <div className="one">Oneplus</div>
             <div className="nokia">Nokia</div>
             <div className="pixel">Pixel</div>
             
         </div>

      );
};
export default products 
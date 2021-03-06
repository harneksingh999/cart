import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Products.css'

class Products extends Component {
    render() {

        const productsItems= this.props.products.map(product=>
            <div className="prodlist">
              <div>
             <a href ={`#${product.id}`} onClick={console.log(product.id)}>
                 <img src ={`/products/${product.sku}_2.jpg`} alt={product.title}></img>
               <p>{product.title}</p>
                 </a>  
                 <b>{product.price}$</b>
            <button className="bd" 
            onClick={(e)=>this.props.handleAddToCart(e,product)}>Add to Cart </button> 
            </div> 
            
            </div>
                                                    

        )
        return (
            <div>
                {productsItems}
            </div>
        );
    }
}

export default Products;
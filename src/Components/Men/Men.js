 import React, { Component } from 'react'
import Products from "../Products/Products"
import Basket from '../Basket/Basket'
import Toolbar from '../Toolbar/Toolbar'
import Modal from '../Modal/Modal'

class Men extends Component{
    state={
        products:[],
        filteredProducts:[],
        cartItems:[],
        isopen:false
    }



    componentWillMount(){
        fetch("http://localhost:8001/products/").then(res=>res.json())
        .then(data=>this.setState({
            products:data,
            filteredProducts:data
        }));
    }

    // getitem =(id)=>{
    //     const prod= this.state.products.find(item =>item.id===id);
    //     return prod;
    // }

    isopen=() =>{
        this.setState({isopen:true})
    }

    isclosed=()=>{
        this.setState({isopen:false})
    }

    handleRemoveFromCart=(e,item)=>{
        this.setState(state=>{
            const cartItems= state.cartItems.filter(elm=>elm.id!==item.id);
            localStorage.setItem('cartItem',cartItems);
            return{cartItems};
        });

    }


    handleAddToCart=(e,product)=>{
        this.setState(state=>{
            const cartItems= this.state.cartItems;
            let productinCart=false;
            cartItems.forEach(item=>{
                if(item.id===product.id){
                    productinCart=true;
                    item.count++;
                }
            });

            if(!productinCart){
                cartItems.push({...product, count:1});
            }

            localStorage.setItem("cartItem",JSON.stringify(cartItems));
            return cartItems
        })

    }
    render(){
        return(

            <div>
                <Toolbar clicked={this.isopen}/>
                <Modal show={this.state.isopen} modalClosed={this.isclosed}>
                    <div> 
                    <Basket  cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart}/>
                    </div>   
                </Modal>
                 <Products products={this.state.filteredProducts} handleAddToCart={this.handleAddToCart}/>
            </div>
        )
    }
}

export default Men;
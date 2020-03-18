import React, { Component } from 'react'
import Toolbar from '../Toolbar/Toolbar'
import SideDrawer from '../SideDrawer/sideDrawer'
import Backdrop from "../Backdrop/Backdrop"
import Products from "../Products/Products"
import Basket from '../Basket/Basket'

class Electronics extends Component {

    state={
        sideDrawerOpen:false,
        products:[],
        filteredProducts:[],
        cartItems:[]
    }
     
    drawerToggleClickHandler=()=>{
        this.setState((prevState)=>{
            return{sideDrawerOpen:!prevState.sideDrawerOpen }

        })
    }

    backdropClickHandler=()=>{
        this.setState({sideDrawerOpen:false})
    }
       
     componentWillMount(){
         fetch("http://localhost:8000/products/").then(res=>res.json())
         .then(data=>this.setState({
             products:data,
             filteredProducts:data
         }));

         if(localStorage.getItem('cartItem')){

            this.setState({cartItems:JSON.parse(localStorage.getItem('cartItem'))}); 
         }
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

    render (){

        let sideDrawer;
        let backdrop;

        if(this.state.sideDrawerOpen){
            sideDrawer=  <SideDrawer/>
            backdrop =  <Backdrop click={this.backdropClickHandler}/>

        }
        return (
            <div>
            <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
              {sideDrawer}
              {backdrop}
            <div>
                <Products products={this.state.filteredProducts} handleAddToCart={this.handleAddToCart}/>
            </div>
            <Basket  cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart}/>
            </div>
        )
    }
}

export default Electronics


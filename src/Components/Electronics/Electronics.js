import React, { Component } from 'react'
import Toolbar from '../Toolbar/Toolbar'
import SideDrawer from '../SideDrawer/sideDrawer'
import Backdrop from "../Backdrop/Backdrop"
import Products from "../Products/Products"

class Electronics extends Component {

    state={
        sideDrawerOpen:false,
        products:[],
        filteredProducts:[]
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
            </div>
        )
    }
}

export default Electronics


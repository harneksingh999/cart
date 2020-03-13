import React, { Component } from 'react'
import Toolbar from '../Toolbar/Toolbar'
import SideDrawer from '../SideDrawer/sideDrawer'
import Backdrop from "../Backdrop/Backdrop"

class Electronics extends Component {

    state={
        sideDrawerOpen:false
    }
     
    drawerToggleClickHandler=()=>{
        this.setState((prevState)=>{
            return{sideDrawerOpen:!prevState.sideDrawerOpen }

        })
    }

    backdropClickHandler=()=>{
        this.setState({sideDrawerOpen:false})
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
                List of Electronics item 
            </div>
            </div>
        )
    }
}

export default Electronics


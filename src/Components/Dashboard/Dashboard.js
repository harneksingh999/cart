import React, { Component } from'react';
import Products from './Products'
import Toolbar from "../Toolbar/Toolbar"
import SideDrawer from '../SideDrawer/sideDrawer'
import Backdrop from "../Backdrop/Backdrop"
import Footer from "../Footer/Footer"

class Dashboard extends Component {

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

    render () {
        let sideDrawer;
        let backdrop;

        if(this.state.sideDrawerOpen){
            sideDrawer=  <SideDrawer/>
            backdrop =  <Backdrop click={this.backdropClickHandler}/>

        }
        return(
            <div style ={{height:'100%'}}> 
              <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
              {sideDrawer}
              {backdrop}
              <body>
              <Products/>
              </body>
                <footer>
                    <Footer/>
                </footer>
            </div>
        )

        
    }
}

export default Dashboard;
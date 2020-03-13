import React from 'react'
import  './Toolbar.css'
import logo from '../../images/logo.png'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'


const toolbar =(props) =>{
      return(
          <header className="Toolbar">
        <div>
             <DrawerToggleButton click={props.drawerClickHandler}/>
         </div>
         <div><img src={logo} width="80px" height="100px" ></img></div>
         <div>Menu</div>
         </header>

      );
};
export default toolbar 
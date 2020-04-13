import React from'react';
import  './Toolbar.css'
import logo from '../../images/logo.png'
import { Link} from "react-router-dom"
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'


const toolbar = props =>(

  
  <header className="Toolbar">
<div>
     <DrawerToggleButton click={props.drawerClickHandler}/>
 </div>
 <div><img src={logo} width="80px" height="100px" ></img></div>
 <div className="logout" >
 <div className="ab">
   {/* <button onClick={ props.clicked}>&#128722;</button> */}
  <Link to ="/cart"><button>&#128722;</button></Link>
   </div>
           <div><Link to="/login"><button>
             Log In
              </button></Link></div>
        </div>
 </header>
  
); 
export default toolbar;
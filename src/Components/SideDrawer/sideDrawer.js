import React from 'react'
import {BrowserRouter} from 'react-router-dom';
import './SideDrawer.css'


const sideDrawer = props =>(
        <BrowserRouter>
         <nav className="side-drawer">
          <ul>
           <li><a href ='/men'> Men's Clothing</a></li>
           <li><a href ='/watches'>Watches</a></li>
           <li><a href ='/sports'>Sports Utility</a></li>
    

        </ul>
    </nav>
    </BrowserRouter>

);

export default sideDrawer
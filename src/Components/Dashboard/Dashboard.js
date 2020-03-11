import React, { Component } from'react';
import { Link} from "react-router-dom"
import Products from './Products'
class Dashboard extends Component {

    state={
        // products:{
        //     appleX: 2,
        //     Pixel:1,
        //     Nokia:2,
        //     OnePlus:1
        // }
        login:false
    }

    render () {

        
        return(

            

            <div> 
                <p>Welcome to the Dashboard</p>
                <Products/>
                <div className="logout" >
                    <Link to="/login"><button>Log In</button></Link>
                </div>
            </div>
        )

        
    }
}

export default Dashboard;
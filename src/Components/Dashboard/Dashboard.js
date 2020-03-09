import React, { Component } from'react';
import { Link} from "react-router-dom"
class Dashboard extends Component {

    render () {
        return(

            <div>
                <p>Welcome to the dashboard</p>
                <div>
                    <Link to="/"><button>Log Out</button></Link>
                </div>
            </div>
        )

        
    }
}

export default Dashboard;
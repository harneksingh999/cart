import React, { Component } from'react';
import { Link} from "react-router-dom"

class Inventory extends Component {

    render () {
        return(

            <div>
                <p>Welcome to the Inventory</p>
                <div>
                    <Link to="/"><button>Log Out</button></Link>
                </div>
            </div>
        )

        
    }
}

export default Inventory;
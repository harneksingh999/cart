import React from'react';
import classes from './Modal.css'



const modal =(props)=>(

    <div>
    <div className={classes.Modal}
    style={{
        transform: props.show ? 'translateY(0)': 'translateY(-100vh)',
        opacity : props.show ? '1':'0'
    }}>
        
        <div>
    
        {props.children}  
        </div>
    </div>
    </div>
)

export default modal;
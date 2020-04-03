import React from'react';
import classes from './Modal.css'
import Back from '../Bd/Bd'


const modal =(props)=>(

    <div>
        <Back show={props.show} cmodal={props.modalClosed}/>

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
import React from 'react';
import classes from './Bd.css'

const back =(props) =>(

    props.show ? <div className={classes.Backd} onClick={props.cmodal}> </div>: null
);

export default back ;
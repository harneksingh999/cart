import React from 'react'
import mi from '../../images/mi.jpg'
import Legion from '../../images/Legion.jpg'
import mi1 from '../../images/mi1.jpg'
import boat from '../../images/boat.jpg'
import './List.css'


const prodlist =()=>{
    return( 
    <div className="mainlist">
       <div className="list">
           <div>
               <img src ={mi} width="250px" height="100px"></img>
               <p>MI A3</p>
           </div>
            </div>

            <div className="list">
           <div>
               <img src ={Legion} width="250px" height="100px"></img>
               <p>LENOVO Z50</p>
           </div>
            </div>

            <div className="list">
           <div>
               <img src ={mi1} width="250px" height="100px"></img>
               <p>REDMI A3</p>
           </div>
            </div>

            <div className="list">
           <div>
               <img src ={boat} width="250px" height="100px"></img>
               <p>BOAT ROCKERZ</p>
           </div>
            </div>
         

     </div>
    )
}

export default prodlist 

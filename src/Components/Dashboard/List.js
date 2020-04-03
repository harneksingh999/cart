import React from 'react'
import mi from '../../images/mi.jpg'
import Legion from '../../images/Legion.jpg'
import mi1 from '../../images/mi1.jpg'
import boat from '../../images/boat.jpg'
import b from '../../images/b.jpg'
import men from '../../images/men.jpg'
import women from '../../images/women.jpg'
import footwear from '../../images/footwear.jpg'




import './List.css'


const prodlist =()=>{
    return( 
    <div className="new">
        <div className="mainlist">
       <div className="l">
           <div>
               <img src ={mi} width="250px" height="100px"></img>
               <p>MI A3</p>
           </div>
            </div>

            <div className="l">
           <div>
               <img src ={Legion} width="250px" height="100px"></img>
               <p>LENOVO Z50</p>
           </div>
            </div>

            <div className="l">
           <div>
               <img src ={mi1} width="250px" height="100px"></img>
               <p>REDMI A3</p>
           </div>
            </div>

            <div className="l">
           <div>
               <img src ={boat} width="250px" height="100px"></img>
               <p>BOAT ROCKERZ</p>
           </div>
            </div>
            </div> <br/>
            <div className="secondarylist">
               <div className="list1">
               <div><img src ={footwear} width="350px" height="100px" className="offers"></img><p>Offers</p></div>
               </div>

               <div className="list1">
               <div><img src ={men} width="350px" height="100px" className="offers"></img><p>Men's Fashion</p></div>
                </div>

                <div className="list1">
               <div><img src ={b} width="350px" height="100px" className="offers"></img><p>Home Decor</p></div>
                </div>

                <div className="list1">
               <div><img src ={women} width="350px" height="100px" className="offers"></img><p>Women's Fashion</p></div>
                </div>



            </div>
        
         

     </div>
    )
}

export default prodlist 

import React from 'react'
import mi from '../../images/mi.jpg'
import Legion from '../../images/Legion.jpg'
import mi1 from '../../images/mi1.jpg'
import boat from '../../images/boat.jpg'
import offer from '../../images/offer.jpg'
import mobilerecharge from '../../images/mobilerecharge.jpg'
import travel from '../../images/travel.jpg'
import ac from '../../images/ac.jpg'
import fan from '../../images/fan.jpg'
import fridge from '../../images/fridge.jpg'
import storage from '../../images/storage.jpg'
import decoration from '../../images/decoration.jpg'
import b from '../../images/b.jpg'
import men from '../../images/men.jpg'
import women from '../../images/women.jpg'
import footwear from '../../images/footwear.jpg'




import './List.css'


const prodlist =()=>{
    return( 
    <div className="new">
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
            </div> <br/>
            <div className="secondarylist">
               <div className="list1">
               <div><img src ={offer} width="100px" height="100px" className="offers"></img><p>Offers</p></div>
               <div><img src ={mobilerecharge} width="100px" height="100px" className="offers"></img><p>Mobile Recharge</p></div>
               <div><img src={travel} width="100px" height="80px" className="offers"></img><p>Travel Tickets</p></div>
               </div>

               <div className="list1">
               <div><img src ={ac} width="100px" height="100px" className="offers"></img><p>AC</p></div>
               <div><img src ={fan} width="100px" height="100px" className="offers"></img><p>Usha Fan</p></div>
               <div><img src={fridge} width="100px" height="80px" className="offers"></img><p>Refrigerator</p></div>
                </div>

                <div className="list1">
               <div><img src ={storage} width="100px" height="100px" className="offers"></img><p>Home Storage</p></div>
               <div><img src ={b} width="100px" height="100px" className="offers"></img><p>Beds</p></div>
               <div><img src ={decoration} width="100px" height="100px" className="offers"></img><p>Home Decoration</p></div>
                </div>

                <div className="list1">
               <div><img src ={men} width="100px" height="100px" className="offers"></img><p>Men's Fashion</p></div>
               <div><img src ={women} width="100px" height="100px" className="offers"></img><p>Women's Fashion</p></div>
               <div><img src ={footwear} width="100px" height="100px" className="offers"></img><p>Footwear</p></div>
                </div>



            </div>
        
         

     </div>
    )
}

export default prodlist 

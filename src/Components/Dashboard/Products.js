import React from 'react'
import './Products.css'
import { Slide } from 'react-slideshow-image';
import iphone from '../../images/iphone.jpg';
import watch from '../../images/watch.jpg';
import earphone from '../../images/earphone.jpg';
import hp from '../../images/hp.jpg';
import Prodlist from "../Dashboard/List"



const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  }
   

const products =(props) =>{
      return(
        <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div>
                <img src={iphone}></img>
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img src={hp}></img>
            </div>
          </div>
          <div className="each-slide">
            <div>
                <img src={watch}></img>
            </div>
            </div>
            <div className="each-slide">
                <div>
                <img src={earphone}></img>
                </div>
              
                </div>  
        
        </Slide>

        <div>
        <Prodlist/>
        </div>
      </div>


      );
};
export default products 
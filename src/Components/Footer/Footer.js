import React from 'react'
import './Footer.css'
import facebook from "../../images/facebook.png"
import instagram from "../../images/instagram.png"
import twitter from "../../images/twitter.png"
import youtube from "../../images/youtube.png"
import whatsapp from "../../images/whatsapp.png"

const footer = props =>(
     <div>
       <footer className="footer-distributed">

<div className="footer-left">
{/* <img src="img/logo.png"> */}
    <h3>About<span>Ecart</span></h3>

    <p className="footer-links">
        <a href="#">Home</a>
        |
        <a href="#">Blog</a>
        |
        <a href="#">About</a>
        |
        <a href="#">Contact</a>
    </p>

    <p className="footer-company-name">© 2019 Ecart Pvt. Ltd.</p>
   </div>

<div className="footer-center">
    <div>
        <i className="fa fa-map-marker"></i>
          <p><span>309 - Rupa Solitaire,
             Bldg. No. A - 1, Sector - 1</span>
            Mahape, Navi Mumbai - 400710</p>
    </div>

    <div>
        <i className="l1">&#9742;</i>
        <p>+91 22-27782183</p>
    </div>
    <div>
        <i className="fa fa-envelope"></i>
        <p><a href="mailto:support@eduonix.com">support@ecart.com</a></p>
    </div>
</div>
<div className="footer-right">
    <p className="footer-company-about">
        <span>About the company</span>
        A few clicks is all it takes.</p>
    <div className="footer-icons">
        <a href="#"><img height ="35px" width="31px"src={facebook}></img></a>
        <a href="#"><img height ="35px" width="31px"src={instagram}></img></a>
        <a href="#"><img height ="35px" width="31px"src={twitter}></img></a>
        <a href="#"><img height ="35px" width="31px"src={whatsapp}></img></a>
        <a href="#"><img height ="35px" width="31px"src={youtube}></img></a>
    </div>
</div>
</footer>

     </div>
     

)

export default footer
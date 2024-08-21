import React from 'react'
import "./Footer.css"
import insta from "../anotherphotofolder/instagram logo.jpg"
import whatsapp from "../anotherphotofolder/whatsapp.png"
import x from "../anotherphotofolder/X.avif"
import logo from "../anotherphotofolder/download (1).png"
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerlogo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>About</li>
            <li>contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footericonscontainer">
                <img src={insta} alt=""  width="70px" height="70px"/>
            </div>
            <div className="footericonscontainer">
                <img src={x} alt="" width="70px" height="70px" />
            </div>
            <div className="footericonscontainer">
                <img src={whatsapp} alt="" width="70px" height="70px" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2024 -ALL RIGHT RESERVED.</p>
        </div>
    </div>
  )
}

export default Footer
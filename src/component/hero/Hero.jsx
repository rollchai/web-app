import React from 'react'
import "./Hero.css"

import model from "../anotherphotofolder/model hd.png"
import handicon from "../assest/hand.svg"
import arrow from "../assest/arrow.svg"
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
<h2>NEW ARRIVAL ONLY</h2>
<div >
    <div className="hand-hand-icon">
        <p>new</p>
        <img src={handicon}alt="" width="125px" height="125px" />
    </div>
    <p>collection</p>
    <p>for everyone</p>
</div>
<div className="hero-latest-button">
    <div>Latest collection</div>
    <img src={arrow} alt=""width="70px" height="70px" />
</div>
        </div>
        <div className="hero-right">
<img src={model} alt=""width="870px" />
        </div>
    </div>
  )
}
 
export default Hero
import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand.png'
import arrow_icon from '../Assets/arrow.png.png'
import hero_i from '../Assets/product_25-1.png.webp'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
<h2>NEW ARRIVALS</h2>
<div>
    <div className="hero-hand-icon">
        <p>new</p>

    </div>
    <p>collections</p>
</div>
<div className="hero-latest-btn">
    <div>Latest Collection</div>
    <img src={arrow_icon} alt="" />
</div>
        </div>
      
<div className="hero-right">
<img src={hero_i} alt="" />
</div>

    </div>
  )
}

export default Hero

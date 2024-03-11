import React from 'react'
import './Offers.css'
import ex_img from '../Assets/product_9-1.png.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
           <h1>Exclusive</h1>
           <p>HIGH QUALITY PRODUCT</p>
           <button>Check Now</button>
      </div>

      <div className="offers-right">
        <img src={ex_img} alt="" />

      </div>
    </div>
  )
}

export default Offers

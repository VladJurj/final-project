import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Stay In Touch With Our Limited Editions</h1>
      <p>Stay Tuned</p>
      <div>
        <input type="email" placeholder='Your Email' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter

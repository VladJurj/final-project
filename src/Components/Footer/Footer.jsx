import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/product_29.png.png'
import instagram_icon from '../Assets/instagram.png.png'
import facebook_icon from '../Assets/facebook.png.png'
import whatsapp_icon from '../Assets/whatsapp.png.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>CreatedBy</p>
      </div>
<ul className="footer-links">
    <li>Company</li>
    <li>Products</li>
    <li>About</li>
    <li>Contact</li>
</ul>
<div className ="footer-social-icon">
    <div className="footer-icons-container">
        <img src={instagram_icon} alt="" />
    </div>
    <div className="footer-icons-container">
        <img src={facebook_icon} alt="" />
    </div>
    <div className="footer-icons-container">
        <img src={whatsapp_icon} alt="" />
    </div>
</div>

<div className="footer-copyright">
    <hr />
    <p>Copyrigt @ 2024 - All Rights Reserved</p>
</div>
    </div>
  )
}

export default Footer

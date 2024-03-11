import React from 'react'
import './Navbar.css'
import {useState} from 'react';

import logo from '../Assets/product_29.png.png'
import cart_icon from '../Assets/cart.png.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  
const [menu,setMenu] = useState ("Shop");

    return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt=""/>
        <p></p>
      </div>

      <ul className="nav-menu">
        <li onClick={()=>{setMenu("Shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("butterfly")}}><Link style={{textDecoration:'none'}} to='/butterfly'>Butterfly</Link> {menu==="butterfly"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("flame")}}><Link style={{textDecoration:'none'}} to='/flame'>Flame</Link>{menu==="flame"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("about us")}}><Link style={{textDecoration:'none'}} to='/about us'>About Us</Link>{menu==="about us"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to ='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar

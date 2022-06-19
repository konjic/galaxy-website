import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Link,

} from "react-router-dom";
import './navbar.css'
import {FaBars} from 'react-icons/fa'



function Navbar() {

  const [Mobile, setMobile] = useState(false)

  return (
    <nav className="navbar">
      
     

      <ul className= {Mobile? "nav-links-mobile" : 'nav-links'} onClick={()=>setMobile(false)}>
        <Link to='/'><li>HOME</li></Link>
        <Link to='/products'><li>PRODUCTS</li></Link>
        <Link to='/hi-res-music'><li>HI-RES MUSIC</li></Link>
        <Link to='/vox-premium'><li>VOX PREMIUM</li></Link>
        <Link to='/contact'><li>CONTACT</li></Link>

      </ul>

      
      
      <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)} style={{background: "transparent"}}>
      <FaBars color='white' size={50}/>
        
      </button>

    </nav>
  )
}

export default Navbar
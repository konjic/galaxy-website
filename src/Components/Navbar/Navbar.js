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
        <Link to='/'><li>PRODUCTS</li></Link>
        <Link to='/practice'><li>HI-RES MUSIC</li></Link>
        <Link to='/why-choose-us'><li>VOX PREMIUM</li></Link>
        <Link to='/lawyers'><li>CONTACT</li></Link>

      </ul>

      
      
      <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
      <FaBars/>
        
      </button>

    </nav>
  )
}

export default Navbar
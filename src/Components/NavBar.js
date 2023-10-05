import React, { NavLink } from 'react-router-dom'
import '../Nav.css'



const NavBar = () => {
  return (
    <div>
        <NavLink 
        to='/' 
        exact 
        className="nav-Link"
        >Home</NavLink>
        <NavLink 
        to='/auction' 
        exact 
        >Auction</NavLink>
        <NavLink 
        to='/auctionyourcar' 
        exact 
        >Auction Your Car</NavLink>
    </div>
  )
}

export default NavBar
import React, { NavLink } from 'react-router-dom'
import Nav from '../Nav.css'

const linkStyles = {
  display: "inline-block",
  width: "150px",
  padding: "12px",
  margin: "12px 12px 12px",
  background: "blue",
  textDecoration: "none",
  color: "white",
  
};

const NavBar = () => {
  return (
    <div>
        <NavLink 
        to='/' 
        exact 
        style={linkStyles}
        >Home</NavLink>
        <NavLink 
        to='/auction' 
        exact 
        style={linkStyles}
        >Auction</NavLink>
        <NavLink 
        to='/auctionyourcar' 
        exact 
        style={linkStyles}
        >Auction Your Car</NavLink>
    </div>
  )
}

export default NavBar
import React, { NavLink } from 'react-router-dom'
import '../Nav.css'



const NavBar = () => {
  return (
    <nav >
      <label className='logo'>Auction
      </label>
      <ul>
        <li>
          <NavLink 
          to='/' 
          exact 
          className="nav-Link"
          >Home</NavLink>
        </li>
        <li>
          <NavLink 
          to='/auction' 
          exact 
          className="nav-Link"
          >Auction</NavLink>
        </li> 
        <li> 
          <NavLink 
          to='/auctionyourcar' 
          exact 
          className="nav-Link"
          >Auction Your Car</NavLink>
        </li> 
      </ul> 
    </nav>
  )
}

export default NavBar
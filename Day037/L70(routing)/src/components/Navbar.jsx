import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      hello
      <ul>
        <li>
            <NavLink to='/' className={({isActive}) => isActive ? "active-link" : ""}>
                Home
            </NavLink>
        </li>
            <NavLink to='/about' className={({isActive}) => isActive ? "active-link" : ""}>
                About
            </NavLink>
        <li>
            <NavLink to='/dashboard' className={({isActive}) => isActive ? "active-link" : ""}>
                Dashboard
            </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar

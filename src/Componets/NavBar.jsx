import React from 'react'
import '../CSS_files/Navbar.css'
import {Link} from 'react-router-dom'
import logo from '../Images/logo.png'
const NavBar = () => {
  return (
    <>
    <div className='Navbar'>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul>
          <Link to={'/home'}>
            <li>Home</li>
          </Link>
            <Link to={'/about'}>
            <li>About</li>
            </Link>
            <Link to={'/project'}>
            <li>Project</li>
            </Link>
            <Link to={'/'}>
            <li>Servies</li>
            </Link>
            <Link to={'/'}>
            <li>Blog</li>
            </Link>
            <Link to={'/contact'}>
            <li>Contact</li>
            </Link>
        </ul>
        <button> Enquire Now </button>
    </div>
    </>
  )
}

export default NavBar
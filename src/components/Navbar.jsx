import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return (
    <>
<nav className="green">
  <div className="nav-wrapper">
          <Link to="/" className="brand-logo left"><i className="material-icons">note</i>my-app</Link>
          <Link to="/"  data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">menu</i></Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/quotes">Quotes</NavLink></li>
        <li><NavLink to="/music">Music</NavLink></li>
        <li><NavLink to="/games">Games</NavLink></li>
    </ul>
  </div>
    </nav>
    <ul className="sidenav" id="mobile-demo">
       <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/quotes">Quotes</NavLink></li>
        <li><NavLink to="/music">Music</NavLink></li>
        <li><NavLink to="/games">Games</NavLink></li>
      </ul>
      </>
  )
}

export default Navbar

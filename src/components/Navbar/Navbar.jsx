import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return (
    <>
<nav className="green">
  <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">📗my-app</Link>
          <Link to="/"  data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">menu</i></Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><NavLink to="/"><i className="material-icons">home</i></NavLink></li>
        <li><NavLink to="/music"><i className="material-icons">queue_music</i></NavLink></li>
        <li><NavLink to="/games"><i className="material-icons">videogame_asset</i></NavLink></li>
        <li><NavLink to="/quotes"><i className="material-icons">format_quote</i></NavLink></li>
            {/* <li><NavLink to="/covid19"><i className="material-icons">coronavirus</i></NavLink></li> */}
    </ul>
  </div>
    </nav>
    <ul className="sidenav" id="mobile-demo">
       <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/music">Music</NavLink></li>
        <li><NavLink to="/games">Games</NavLink></li>
        <li><NavLink to="/quotes">Quotes</NavLink></li>
      </ul>
      </>
  )
}

export default Navbar

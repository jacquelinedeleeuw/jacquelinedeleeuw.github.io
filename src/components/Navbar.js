import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [location, setLocation] = useState()

  useEffect(() => {
    setLocation(window.location.pathname)
  }, [])

  // useEffect(() => {
  //   setLocation(window.location.pathname)
  // }, [])

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <b>My Portfolio.</b>
        </Link>
      </div>
      <div id="navbar" className="navbar-menu">
        <div className="navbar-end">
          {location === '/' &&
          <Link to="/about" className="navbar-item" onClick={() => setLocation('/about')}>
            About Me
          </Link>
          }
          {location === '/about' &&
          <Link to="/" className="navbar-item" onClick={() => setLocation('/')}>
            Home
          </Link>
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar

import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  return (
    <>
      <header className="navbar">
        <h2 className="navbar-title">TCC PLUS</h2>
        <nav className="navbar-links">
        <Link to="/" className='link1'>Home</Link>
        {location.pathname !== '/login' &&  location.pathname !== '/editproject' && (
            <Link to="/login" className="link1">Login</Link>
          )}
          {location.pathname !== '/register' && location.pathname !== '/editproject' && (
            <Link to="/register" className="link1">Cadastro</Link>
          )}
          {location.pathname === '/showproject' && (
            <Link to="/" className="link1">Logout</Link>
          )}
          {location.pathname === '/editproject' && (
            <Link to="/" className="link1">Logout</Link>
          )}

        </nav>
      </header>


    </>
  )
}

export default NavBar

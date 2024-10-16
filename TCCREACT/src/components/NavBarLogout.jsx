import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBarLogout = () => {
  const location = useLocation();

  return (
    <>
      <header className="navbar">
        <h2 className="navbar-title">TCC PLUS</h2>
        <nav className="navbar-links">
          <Link to="/" className='link1'>Logout</Link>
          
          {location.pathname !== '/paineladm' && (
            <Link to="/paineladm" className='link1'>Painel de Professores</Link>
          )}
        
          {location.pathname !== '/paineladmaluno' && (
            <Link to="/paineladmaluno" className='link1'>Painel de Alunos</Link>
          )}
        </nav>
      </header>
    </>
  );
}

export default NavBarLogout;

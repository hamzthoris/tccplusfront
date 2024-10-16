import React from 'react'
import '../assets/style/home.css';
import FeaturedSection from './FeaturedSection';


const Footer = () => {

  

  return (
    <div>
      <footer className="site-footer">
      <div className="footer-content">
        <p>&copy; 2024 TCC Plus. Todos os direitos reservados.</p>
      </div>
      <div className="footer-links">
        <a href='/about'>Sobre</a>
        <a href='/' ><b>Intranet</b></a>
        <a href='/'>Contato</a>
      </div>
      <div className="social-links">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </footer>
    </div>
  )
}

export default Footer

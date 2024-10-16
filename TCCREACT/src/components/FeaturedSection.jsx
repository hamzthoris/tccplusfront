import React from 'react'
import '../assets/style/home.css';
import logo from '../assets/images/indeximg.png'
import AboutSection from './AboutSection';

const FeaturedSection = () => {
  return (
    <div>
      <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-name">
          Olá, <span></span>
        </div>
        <div className="featured-text-info">
          <p>
            Descubra o futuro da avaliação acadêmica com o TCC Plus, <br />
            a plataforma que transforma a forma como alunos <br />
            e professores interagem...
          </p>
        </div>
        <div className="featured-text-btn">
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src={logo} />
        </div>
      </div>
    </section>
    </div>
  )
}

export default FeaturedSection

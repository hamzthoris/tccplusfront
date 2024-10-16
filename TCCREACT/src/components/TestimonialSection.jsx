import React from 'react'
import '../assets/style/home.css';

const TestimonialSection = () => {
  return (
    <div>
      <section className="testimonial-section">
      <div className="container">
        <div className="row">
          <div className="column column-1">
            <div className="testimonial upper-larger">
              <h3>A dor que resolvemos</h3>
              <p>Fizemos pesquisas com alguns alunos do curso técnico, em prol de tornar pública, suas dúvidas e receios</p>
            </div>
            <div className="testimonial lower-smaller">
              <h3>Depoimento 2</h3>
              <p>Lorem ipsum dolor sit amet...</p>
            </div>
          </div>
          <div className="column column-2">
            <div className="testimonial equal-size">
              <h3>Depoimento 3</h3>
              <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="testimonial equal-size">
              <h3>Depoimento 4</h3>
              <p>Lorem ipsum dolor sit amet...</p>
            </div>
          </div>
          <div className="column column-3">
            <div className="testimonial equal-size">
              <h3>Depoimento 5</h3>
              <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="testimonial equal-size">
              <h3>Depoimento 6</h3>
              <p>Lorem ipsum dolor sit amet...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default TestimonialSection

import React from 'react'
import '../assets/style/home.css';
import teamwork from '../assets/images/teamwork.gif'

const AboutSection = () => {
  return (
    <div>
      <section className="about">
      <div className="about-left">
        <img src={teamwork} alt="GIF Sobre Nós" />
      </div>
      <div className="about-right">
        <h2>Sobre Nós</h2>
        <p>Este <span class="highlight">sistema revolucionário</span> foi criado para transformar a gestão dos Trabalhos de Conclusão de Curso (TCC) na FIEB, facilitando desde a submissão até a atribuição de notas. Com uma <span class="highlight">plataforma centralizada e intuitiva</span>, alunos e professores encontram um <span class="highlight">espaço otimizado</span> para atualizar projetos continuamente e receber feedback construtivo de forma ágil. Essa solução substitui métodos tradicionais e ferramentas genéricas, trazendo <span class="highlight">eficiência</span> e adaptando-se às necessidades específicas do ambiente acadêmico, promovendo um <span class="highlight">processo mais fluido e engajador</span> para todos os envolvidos.</p>
      </div>
    </section>
    </div>
  )
}

export default AboutSection

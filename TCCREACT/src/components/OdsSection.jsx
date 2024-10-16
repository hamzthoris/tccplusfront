import React from 'react'
import '../assets/style/home.css';
import ods from '../assets/images/ods.png'
const OdsSection = () => {
  return (
    <div>
      <section className="onu">
      <div className="onu-left">
        <h2>ODS ONU</h2>
        <p>
        Os Objetivos de Desenvolvimento Sustentável (ODS) da ONU são uma coleção de 17 metas globais estabelecidas em 2015 para enfrentar desafios como a pobreza, a desigualdade e as mudanças climáticas até 2030. Cada ODS tem metas específicas e indicadores para medir o progresso em áreas essenciais como saúde, educação e meio ambiente.
        </p>
        <br/>
        <p>A Agenda 2030, adotada pela Assembleia Geral da ONU, é o plano de ação global para alcançar esses objetivos. Ela visa promover um desenvolvimento inclusivo e sustentável, com foco na erradicação da pobreza e na proteção do planeta, garantindo que ninguém fique para trás. A implementação da Agenda 2030 envolve a colaboração entre governos, empresas e sociedade civil para criar soluções inovadoras e eficazes para os desafios globais.</p>
      </div>
      <div className="onu-right">
        <img src={ods} alt="ODS ONU" />
      </div>
    </section>
    </div>
  )
}

export default OdsSection

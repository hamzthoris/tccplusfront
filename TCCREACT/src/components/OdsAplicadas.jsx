import React from 'react'
import '../assets/style/home.css';

const OdsAplicadas = () => {
  return (
    <div>
      <div className="odsaplicadas">
      <div className="container1">
        <h1>Em quais ODS’s o projeto se encaixa?</h1>
        <div className="ods-container1">
          <div className="ods1">
            <img src="https://gtagenda2030.org.br/wp-content/uploads/2019/10/ods4.jpg?w=640" className="ods-icon1" />
            <div>
              <h2>ODS 4</h2>
              <p>O TCC Plus contribui para o ODS 4 (Educação de Qualidade) ao facilitar Trabamos de Conclusão de Curso (TCC). Ele promove uma educação mais inclusiva e equitativa, melhorando a comunicação entre alunos e orientadores e ampliando o acesso a ferramentas digitais. O sistema também aprimora a qualidade dos projetos e desenvolve competências essenciais como o uso de tecnologias e trabalho colaborativo, além de fornecer dados para monitoramento e avaliação do progresso educacional.</p>
            </div>
          </div>
          <br />
          <div className="ods2">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQTeESh9fd9UYHfL5TBDLFn6oUCOIjlm-Ejg&s" alt="ODS 9" className="ods-icon1" />
            <div>
              <h2>ODS 9</h2>
              <p>O TCC Plus se aplica ao ODS 9 (Indústria, Inovação e Infraestrutura) ao promover a digitalização e a inovação no processo educacional. A plataforma otimiza a gestão de TCCs, contribuindo para a modernização das infraestruturas acadêmicas e aumentando a eficiência nos processos de avaliação acompanhamento dos projetos. Além disso, incentiva a inovação ao oferecer um ambiente digital colaborativo, que facilita o desenvolvimento de pesquisas e projetos tecnológicos, preparando os alunos para um mercado de trabalho mais dihâmico e tecnológico.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default OdsAplicadas

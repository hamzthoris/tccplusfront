import React from 'react'
import NavBar from '../../components/NavBar'
import '../../assets/style/tables.css'
import ProjetoService from "../../services/ProjetoService"
import UsuarioService from '../../services/UsuarioService';

function ProfessorArea() {
  return (
    <div className='bodyprof'>
    <NavBar></NavBar>
    <main className="professor-main">
      <h1 className="professor-title">Área do Professor</h1>

      <form className="professor-form">
        <div className='caixafiltro'>
          <label className='labelprojprof'>Insira o nome do projeto
          <input
            type="text"
            id="projectName"
            placeholder="Pesquisar nome do Projeto"
            className="professor-input"
          /></label>
          <select id="filterRoom" className="professor-select">
            <option value="all">Turma</option>
            <option value="INF3EM">INF3EM</option>
            <option value="INF3DM">INF3DM</option>
          </select>
          <button type="button" className="professor-button">
            Filtrar
          </button>
          </div>
        </form>


      <table className="professor-table">
        <thead>
          <tr>
            <th>Nome do projeto</th>
            <th>Sala</th>
            <th>Aluno Responsável</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="/showproject" className="professor-link">
                TCC Plus
              </a>
            </td>
            <td>INF3EM</td>
            <td>rm86712</td>
          </tr>
          <tr>
            <td>
              <a href="/projetos/uniao-voluntaria" className="professor-link">
                União Voluntária
              </a>
            </td>
            <td>INF3EM</td>
            <td>rm86713</td>
          </tr>
          <tr>
            <td>
              <a href="/showproject" className="professor-link">
                Rede de Apoio
              </a>
            </td>
            <td>INF3EM</td>
            <td>rm86714</td>
          </tr>
          <tr>
            <td>
              <a href="/showproject" className="professor-link">
                Centro de Treinamento
              </a>
            </td>
            <td>INF3EM</td>
            <td>rm86715</td>
          </tr>
          <tr>
            <td>
              <a href="/projetos/xxx" className="professor-link">
                XXX
              </a>
            </td>
            <td>INF3DM</td>
            <td>rm86716</td>
          </tr>
        </tbody>
      </table>
    </main>
    </div>
  );
}

export default ProfessorArea;


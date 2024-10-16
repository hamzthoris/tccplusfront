import React from 'react'
import '../../assets/style/painel.css'
import { useState } from 'react'
import { useEffect } from 'react'


const Painel = () => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);
    return (
  <div className='mainBody'>
<div className="container_01_adm">
      <aside className="sidebar_01">
        <div className="logo_01">
          <img src="logo.png" alt="Imagem do Aluno" />
        </div>
        <nav>
          <ul>
            <li><a href="#">Usuários</a></li>
            <li><a href="#">Professores</a></li>
            <li><a href="#" className="active_01">Alunos</a></li>
          </ul>
        </nav>
      </aside>
      <main className="mainContent_01">
        <h2 className="title_01_adm">Painel do Administrador</h2>
        <h3 className="sectionTitle_01">Alunos</h3>
        <div className="searchBox_01">
          <input type="text" id="search-input" placeholder="Pesquisar o nome de algum aluno" />
        </div>
        <table className="table_01" id="alunos-table">
          <thead>
            <tr>
              <th>Nome do Aluno</th>
              <th>Rm</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Maria Silva</td>
              <td>rm86691</td>
              <td>rm86691@estudante.fieb.edu.br</td>
              <td><button className="deleteBtn_01">Excluir</button></td>
            </tr>
            <tr>
              <td>João Santos</td>
              <td>rm86634</td>
              <td>rm86634@estudante.fieb.edu.br</td>
              <td><button className="deleteBtn_01">Excluir</button></td>
            </tr>
            <tr>
              <td>Ana Lima</td>
              <td>rm86693</td>
              <td>rm86693@estudante.fieb.edu.br</td>
              <td><button className="deleteBtn_01">Excluir</button></td>
            </tr>
          </tbody>
        </table>
        <button className="editBtn_01">Editar</button>
        <button className="addBtn_01" onClick={openPopup}>Adicionar novo</button>

        {showPopup && (
          <div className="overlay_01">
            <div className="popup_01">
              <h2>Avaliação do TCC</h2>
              <form>
                <label htmlFor="professor">Nome do Professor</label>
                <input type="text" id="professor" name="professor" required />

                <label htmlFor="notaDocumentacao">Nota da Documentação</label>
                <input type="number" id="notaDocumentacao" name="notaDocumentacao" min="0" max="10" required />

                <label htmlFor="notaApresentacao">Nota da Apresentação</label>
                <input type="number" id="notaApresentacao" name="notaApresentacao" min="0" max="10" required />

                <label htmlFor="notaFrontEnd">Nota do FrontEnd</label>
                <input type="number" id="notaFrontEnd" name="notaFrontEnd" min="0" max="10" required />

                <label htmlFor="notaBackEnd">Nota do BackEnd</label>
                <input type="number" id="notaBackEnd" name="notaBackEnd" min="0" max="10" required />

                <label htmlFor="notaMobile">Nota do Mobile</label>
                <input type="number" id="notaMobile" name="notaMobile" min="0" max="10" required />

                <label htmlFor="comentario">Comentário</label>
                <textarea id="comentario" name="comentario" />
                <button type="submit">Enviar Avaliação</button>
              </form>
              <button className="closePopupBtn_01" onClick={closePopup}>Fechar</button>
            </div>
          </div>
        )}
      </main>
    </div>
    </div>
  );
};

export default Painel;
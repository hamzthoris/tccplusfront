import React from 'react'
import '../../assets/style/home.css'
import NavBar from '../../components/NavBar';
import picon from '../../assets/images/placeholdericon.png'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjetoService from "../../services/ProjetoService"
import UsuarioService from '../../services/UsuarioService';
import UserEdit from '../User/UserEdit';
import EditProject from './EditProject';


const ShowProject = () => {
    const navigate = useNavigate();

    const goTo = () => {
        navigate('/createproject')
    }

    const [projetos, setProjetos] = useState([]);
    const [projectName, setProjectName] = useState('');

    useEffect(() => {
        ProjetoService.findAll().then(
            (response) => {
                const projetos = response.data;
                setProjetos(projetos);
                if (projetos.length > 0) {
                  setProjectName(projetos[0].nome);  // Exemplo de como pegar o nome do primeiro projeto
              }
            }
        ).catch((error) => {
            console.log(error);
        })
    }, []);

    const editar = (id) => {
        <EditProject/> + id
    }

    const user = UsuarioService.getCurrentUser();
    
  return (
   <>
   <main className='alterbody'>
   <div className="project-container">

      <div className="table-container">
        <table>
          <thead>
            <tr>
            <th>Integrantes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Guilherme Fernandes</td>
            </tr>
            <tr>
              <td>Adson Cauã</td>
            </tr>
            <tr>
              <td>Renan Santos</td>
            </tr>
           
          </tbody>
        </table>
      </div>
      <div className="table-container">
        
      
        <table>
          <thead>
            <tr>
            <th>Descrição de Projeto</th>
            <th>Documentação</th>
            <th>Link do Sistema</th>
            </tr>
          </thead>
          <tbody>
          {projetos?.map((projeto) => (
            <tr className="" key={projeto.id}>
                <td>{projeto.descricao}</td>
                <td>{projeto.documentacao}</td>
                <td><a href={projeto.link_Sistema}>{projeto.nome}</a></td>
            </tr>
                                ))}
              
          </tbody>
        </table>
      </div>

      <div className="buttons">
      {projectName.trim() === '' ? (
        <button onClick={goTo}>Criar Projeto</button>
        ) : (
        <button onClick={editar}>Editar Projeto</button>
        )}
      </div>
    </div>
    </main>
    </>
  )
}

export default ShowProject
{/* 
    <div class="container">
        <div class="sidebar">
            <div>
                <div class="logo">
                    <div class="circle-logo">SUA LOGO</div>
                </div>
                <div class="turma">
                    <h2>Turma:</h2>
                    <ul>
                        <li>Integrant 1 - rm</li>
                        <li>Integrant 2 - rm</li>
                        <li>Integrant 3 - rm</li>
                        <li>Integrant 4 - rm</li>
                        <li>Integrant 5 - rm</li>
                    </ul>
                </div>
            </div>
<div class="buttons">
                <button>EDITAR</button>
                <button>SALVAR</button>
                <button>VER NOTAS</button>
            </div>
        </div>

        <div class="main-content">
            <h1>Nome do Projeto</h1>
            <div class="descricao-projeto">
                <h3>Descrição do projeto</h3>
                <textarea placeholder="Insira a descrição do projeto aqui"></textarea>
            </div>

            <div class="upload-projeto">
                <h3>Upload do projeto</h3>
                <div class="upload-container">
                    <input class="github-link-input" type="text" placeholder="Insira o link do GitHub" />
                    <div class="upload-pdf">
                        <div class="folder-icon">+</div>
                        <p>Documentação PDF</p>
                    </div>
                </div>
            </div>
        </div>
    </div>*/}
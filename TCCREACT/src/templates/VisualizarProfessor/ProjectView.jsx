import React from 'react'
import '../../assets/style/home.css'
import NavBar from '../../components/NavBar';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjetoService from "../../services/ProjetoService"
import IntegranteService from "../../services/IntegranteService"
import UsuarioService from '../../services/UsuarioService';
import UserEdit from '../User/UserEdit';




const ProjectView = () => {

    const navigate = useNavigate();

    const goTo = () => {
        navigate('/visualizar')
    }

    const [integrantes, setIntegrantes] = useState([]);
    const [projetos, setProjetos] = useState([]);

    useEffect(() => {
        ProjetoService.findAll().then(
            (response) => {
                const projetos = response.data;
                setProjetos(projetos);
            }
        ).catch((error) => {
            console.log(error);
        })
    }, []);

    useEffect(() => {
        IntegranteService.findAll().then(
            (response) => {
                const integrantes = response.data;
                setIntegrantes(integrantes);
            }
        ).catch((error) => {
            console.log(error);
        })
    }, []);

  return (
    <>
    <main className='alterbody'>
   <div className="project-container">
        <div className="profile">
            <h1>{user.nome}</h1>
          <button className="btn change-photo" onClick={<UserEdit/>}>Editar Usuário</button>
        </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
            <th>Integrantes</th>
            </tr>
          </thead>
          <tbody>
          {integrantes?.map((integrante) => (
            <tr>
              <td>{integrante.nome}</td>
            </tr>
             ))}
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
        <button onClick={goTo}>Retornar</button>
      </div>
    </div>
    </main>
    </>
  )
}

export default ProjectView

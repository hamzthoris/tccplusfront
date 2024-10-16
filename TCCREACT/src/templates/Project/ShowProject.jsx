import React, { useEffect, useState } from 'react';
import '../../assets/style/home.css';
import NavBar from '../../components/NavBar';
import picon from '../../assets/images/placeholdericon.png';
import { useNavigate, useParams } from 'react-router-dom';
import ProjetoService from "../../services/ProjetoService";
import UsuarioService from '../../services/UsuarioService';
import UserEdit from '../User/UserEdit';
import ProjectRegister from './ProjectRegister'; // Importar o ProjectRegister

const ShowProject = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [projetos, setProjetos] = useState([]);
    const [projectName, setProjectName] = useState('');
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const user = UsuarioService.getCurrentUser();
    const [showUserEdit, setShowUserEdit] = useState(false);

    const goTo = () => {
        navigate('/createproject');
    };

    const newIntegrante = () => {
        navigate('/createintegrante');
    };

    const updateIntegrante = () => {
        navigate('/editintegrante');
    };

    const objectValues = {
        id: null,
        nome: "",
        descricao: "",
        link_Sistema: "",
        documentacao: null,

    }
    
    const [projeto, setProjeto] = useState(objectValues);

    useEffect(() => {
        UsuarioService.findAll().then(
            (response) => {
                const usuarios = response.data;
                setUsuarios(usuarios);
            }
        ).catch((error) => {
            console.log(error);
        });
    }, []);

    useEffect(() => {
        ProjetoService.findByUsuario(id).then(
            (response) => {
                const projeto = response.data;
                setProjeto(projeto);
                console.log(projeto);
                if (projeto && projeto.nome) { 
                    setProjectName(projeto.nome); 
                }
                setLoading(false);
            }
        ).catch((error) => {
            console.log(error);
            setLoading(false);
        });

    }, [id]);

    const editar = (id) => {
        navigate(`/editaruser/` + id);
    };
    const editarProjeto = (id) => {
        navigate(`/editarprojeto/` + id);
    };

    const handleEditUserClick = () => {
        setShowUserEdit(true);
    };

    const handleClosePopup = () => {
        setShowUserEdit(false);
    };



    return (
        <>
            <NavBar />
            <main className='alterbody'>
                <div className="project-container">
                    <div className="profile">
                        <img
                            src={picon} 
                            alt="Foto de Perfil"
                            className="profile-pic"
                        />
                        <h1>{user.nome}</h1>
                        <button className="editbutton" onClick={() => editar(user.id)}>Editar Usuário</button>
                        {showUserEdit && <UserEdit onClose={handleClosePopup} />} 
                    </div>
                    
                    <div className="table-container">
                        <table>
                          <thead>
                            <tr>
                            <th>Integrantes</th>
                            <th>RM</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Guilherme Fernandes</td>
                              <td>RM TESTE</td>
                              <td className='editbutton-td'><div><button onClick={updateIntegrante} className='editbutton'>Editar Integrante</button></div></td>
                            </tr>
                          </tbody>
                        </table>
                    </div>
                    
                    <br /> <br />

                    {loading ? (
                        <p>Carregando projetos...</p>
                    ) : (
                        <div className="table-container">
                            <h1>{projeto.nome}</h1>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Descrição de Projeto</th>
                                        <th>Documentação</th>
                                        <th>Link do Sistema</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        <tr key={projeto.id}>
                                            <td>{projeto.descricao}</td>
                                            <td>{projeto.documentacao ? (
        <a href={projeto.documentacao} download={`${projeto.nome}_Documentacao.pdf`} target="_blank" rel="noopener noreferrer">
            {projeto.nome} Documentação
        </a>
    ) : (
        <span>Sem documentação disponível</span>
    )}</td>
                                            <td><a href={projeto.link_Sistema} target="_blank" rel="noopener noreferrer">{projeto.nome}</a></td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                    )}

                    <div className="buttons">
                        {projectName.trim() === '' ? (
                            <button onClick={goTo}>Criar Projeto</button>
                        ) : (
                            <button onClick={() => editarProjeto(projeto.id)}>Editar Projeto</button>
                        )}
                    </div>

                    
                </div>
            </main>
        </>
    );
};

export default ShowProject;

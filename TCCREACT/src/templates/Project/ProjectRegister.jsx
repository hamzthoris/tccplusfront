import React, { useState } from 'react';
import ProjetoService from '../../services/ProjetoService';
import NavBar from '../../components/NavBar';
import { useNavigate } from 'react-router-dom';
import UsuarioService from '../../services/UsuarioService';

const ProjectRegister = ({ handleProjectCreation }) => { // Recebe a função como prop
    const navigate = useNavigate();
    const usuario = UsuarioService.getCurrentUser();

    const [formData, setFormData] = useState({});
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const selectFile = (event) => {
        const currentFile = event.target.files[0];
        setFile(currentFile);
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData((formData) => ({ ...formData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");

        ProjetoService.create(file, formData, usuario.email).then(
            (response) => {
                const novoProjeto = {
                    id: response.data.id,
                    descricao: response.data.descricao,
                    documentacao: response.data.documentacao,
                    link_Sistema: response.data.link_Sistema,
                    nome: response.data.nome,
                    userId: usuario.id // Associar o projeto ao usuário logado
                };


                setMessage(response.data.message);
                navigate('/showproject/' + usuario.id); // Redireciona para a página de projetos
            },
            (error) => {
                const message = error.response?.data?.message || "Erro ao criar o projeto.";
                setMessage(message);
            }
        );
    };

    return (
        <div>
            <NavBar />
            <main className='alterbody'>
                <h1 className="titulo_login">Crie seu Projeto</h1>
                <div className="login_form">
                    <form onSubmit={handleSubmit}>
                        <span className="span1">NOME</span>
                        <input type="text" placeholder="Insira o nome do projeto" required
                            name='nome'
                            value={formData.nome || ""}
                            onChange={handleChange} />

                        <span className="span1">LINK DO SISTEMA</span>
                        <input type="text" placeholder="Insira aqui o link do sistema" 
                            name="link_Sistema"
                            value={formData.link_Sistema || ""}
                            onChange={handleChange} />

                        <span className="span1">DESCRIÇÃO</span>
                        <input type="text" placeholder="Escreva uma descrição breve do seu sistema" required
                            name="descricao"
                            value={formData.descricao || ""}
                            onChange={handleChange} />

                        <span className="span1">DOCUMENTAÇÃO</span>
                        <input type="file"
                            name="file"
                            onChange={selectFile}
                        />
                        <button type="submit" className="form-btn">ENVIAR</button>
                    </form>
                    {message && <p>{message}</p>} {/* Exibir mensagem de sucesso ou erro */}
                </div>
            </main>
        </div>
    );
};

export default ProjectRegister;

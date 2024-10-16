import React from 'react'
import NavBar from '../../components/NavBar'
import '../../assets/style/painel.css'
import UsuarioService from '../../services/UsuarioService';
import NavBarLogout from '../../components/NavBarLogout';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProfessorArea() {
  const [professores, setProfessores] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // Função para buscar os professores
    const fetchProfessores = async () => {
      try {
        const response = await UsuarioService.findAll();
        // Filtra os usuários com nível de acesso "Professor"
        const professoresFiltrados = response.data.filter(usuario => usuario.nivelAcesso === 'Professor');
        setProfessores(professoresFiltrados);
      } catch (error) {
        console.error("Erro ao buscar professores:", error);
      }
    };

    fetchProfessores();
  }, []);


  const criarProfessor = () => {
    navigate('/registerprof')
  };

  const deleteRow = (index) => {
    setProfessores(professores.filter((_, i) => i !== index));
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleInativar = async (id) => {
    try {
      // Chama a função inativar do UsuarioService para mudar o status do professor
      await UsuarioService.inativar(id);

      // Atualiza o estado local para refletir a mudança
      setProfessores(prevProfessores => 
        prevProfessores.map(professor => {
          if (professor.id === id) {
            return { ...professor, statusUsuario: 'INATIVO' }; // Mantém os dados, mas altera o status
          }
          return professor;
        })
      );
    } catch (error) {
      console.error("Erro ao inativar professor:", error);
    }
  };
  const handleReativar = async (id) => {
    try {
      await UsuarioService.reativar(id);
      setProfessores(professores.map(professor =>
        professor.id === id ? { ...professor, statusUsuario: 'ATIVO' } : professor
      ));
    } catch (error) {
      console.error("Erro ao reativar o usuário:", error);
    }
  };

  const editarProfessor = (id) => {
    navigate(`/editaruserprof/${id}`); // Navegar para a página de edição com o ID do professor
  };

  return (
    <>
      <NavBarLogout />
      <div className="container1">
        <main className="main-content1">
          <h2>Painel do Administrador</h2>
          <h3>Professores</h3>
          <div className="search-box1">
            <input
              type="text"
              placeholder="Pesquisar o nome de algum professor"
              onChange={handleSearchChange}
            />
          </div>
          <table className="table1">
            <thead>
              <tr>
                <th>Nome do Professor</th>
                <th>Status</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {professores
                .filter(professor => professor.nome.toLowerCase().includes(searchTerm))
                .map((usuario, index) => (
                  <tr key={index}>
                    <td contentEditable={isEditing}>{usuario.nome}</td>
                    <td contentEditable={isEditing}>{usuario.statusUsuario}</td>
                    <td contentEditable={isEditing}>{usuario.email}</td>
                    <td className='td'>
                    {usuario.statusUsuario === 'ATIVO' ? (
                        <button className="delete-btn1" onClick={() => handleInativar(usuario.id)}>Inativar</button>  
                      ) : (
                        <button className="editar-btn1" onClick={() => handleReativar(usuario.id)}>Reativar</button>  
                      )}
                      <button className="editar-btn1" onClick={() => editarProfessor(usuario.id)}>Editar</button>
                    
                    
                   
                      
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="button-container3">
  <button className="edit-btn1" onClick={criarProfessor}>
    Registrar Professor
  </button>
</div>
        </main>
      </div>
    </>
  );
}

export default ProfessorArea;


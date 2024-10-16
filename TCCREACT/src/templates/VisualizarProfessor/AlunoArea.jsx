import React from 'react'
import NavBar from '../../components/NavBar'
import '../../assets/style/painel.css'
import UsuarioService from '../../services/UsuarioService';
import NavBarLogout from '../../components/NavBarLogout';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AlunoArea() {
  const [alunos, setAlunos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // Função para buscar os professores
    const fetchAlunos = async () => {
      try {
        const response = await UsuarioService.findAll();
        const alunosFiltrados = response.data.filter(usuario => usuario.nivelAcesso === 'Aluno');
        setAlunos(alunosFiltrados);
      } catch (error) {
        console.error("Erro ao buscar professores:", error);
      }
    };

    fetchAlunos();
  }, []);


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
      setAlunos(prevAlunos => 
        prevAlunos.map(aluno => {
          if (aluno.id === id) {
            return { ...aluno, statusUsuario: 'INATIVO' }; // Mantém os dados, mas altera o status
          }
          return aluno;
        })
      );
    } catch (error) {
      console.error("Erro ao inativar professor:", error);
    }
  };
  const handleReativar = async (id) => {
    try {
      await UsuarioService.reativar(id);
      setAlunos(alunos.map(aluno =>
        aluno.id === id ? { ...aluno, statusUsuario: 'ATIVO' } : aluno
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
          <h3>Alunos</h3>
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
                <th>Nome do Aluno</th>
                <th>Status</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {alunos
                .filter(aluno => aluno.nome.toLowerCase().includes(searchTerm))
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
        </main>
      </div>
    </>
  );
}

export default AlunoArea;


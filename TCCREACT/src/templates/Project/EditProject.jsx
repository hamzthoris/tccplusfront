import React from 'react'
import UsuarioService from '../../services/UsuarioService'
import ProjetoService from '../../services/ProjetoService'
import '../../assets/style/popup.css'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const UserEdit = () => {
   
    const navigate = useNavigate();
    const [successful, setSuccessful] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [message, setMessage] = useState();
    const [Data, setData] = useState({});
    const [formData, setFormData] = useState({});

    
    const objectValues = {
      id: null,
      nome: "",
      link_Sistema: "",
      descricao: "",
      };

    const [projeto, setProjeto] = useState(objectValues); 
    const { id } = useParams();

    const user = UsuarioService.getCurrentUser();

    const closePopup = () => {
      navigate(`/showproject/` + user.id)
      setIsVisible(false);
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setProjeto(projeto => ({ ...projeto, [name]: value }));
    }

    useEffect(() => {
      ProjetoService.findById(id).then(
          (response) => {
              const projeto = response.data;
              setProjeto(projeto);
              console.log(projeto);
          }
      ).catch((error) => {
          console.log(error);
      })
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

   ProjetoService.update(user.id, projeto).then(
        (response) => {
            setMessage(response.data.message);
            setSuccessful(true);
            navigate('/showproject/' + user.id);
        },
        (error) => {
            const respMessage =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            setMessage(respMessage);
        }

    );
};

  useEffect(()=>{
    const userJson = localStorage.getItem("user");
    console.log(userJson);
})
const goTo = (user) => {
  navigate(`/showproject/` + user.id)
}

  return (
    isVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
          <form onSubmit={handleSubmit}>
        {!successful && (
          <>
          <span className="span2">NOME</span>
          <input type="text" placeholder="DIGITE DO NOME DO PROJETO" autocomplete="off" required 
            id='inputNome'
            name='nome'
            value={projeto.nome}
            className='input-line'
            onChange={handleChange}  />
          <span className="span2">LINK DO SISTEMA</span>
          <input type="text" placeholder="INSIRA O LINK DO SISTEMA" autocomplete="off" required 
            id="inputlink_Sistema" 
            name="link_Sistema"
            value={projeto.link_Sistema}
            className='input-line'
            onChange={handleChange}/>
            <span className="span2">DESCRIÇÃO</span>
          <input type="text" placeholder="REESCREVA A DESCRIÇÃO " autocomplete="off" required 
            id="inputlink_Sistema" 
            name="descricao"
            value={projeto.descricao}
            className='input-line'
            onChange={handleChange}/>
            <input type="file" 
            id='inputFile'
            value={projeto.file}/>
            
          <div className='button-container'>
          <button type="submit" className="form-btn">Salvar Alterações</button>
          <button type="button" onClick={closePopup} className='form-btn'>Fechar</button>
          </div>
          </>
        )}
        </form>
            
          </div>
        </div>
      )
  )
}

export default UserEdit

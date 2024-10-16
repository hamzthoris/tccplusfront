import React from 'react'
import UsuarioService from '../../services/UsuarioService'
import '../../assets/style/popup.css'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const UserEdit = () => {
    const { id } = useParams();
    const currentUser = UsuarioService.getCurrentUser();
    const navigate = useNavigate();
    const [successful, setSuccessful] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [message, setMessage] = useState();
    const [Data, setData] = useState({});
    const [formData, setFormData] = useState({});

    
    const objectValues = {
      id: null,
      nome: "",
      };

    const [usuario, setUsuario] = useState(objectValues); 



    const closePopup = () => {
      setIsVisible(false);
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUsuario(usuario => ({ ...usuario, [name]: value }));
    }

    useEffect(() => {
      UsuarioService.findById(id).then(
          (response) => {
              const usuario = response.data;
              setUsuario(usuario);
              console.log(usuario);
          }
      ).catch((error) => {
          console.log(error);
      })
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    UsuarioService.update(id, usuario).then(
        (response) => {
            setMessage(response.data.message);
            setSuccessful(true);
            navigate('/showproject/');
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
const goTo = () => {
  navigate('/showproject')
}

  return (
    isVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
          <form onSubmit={handleSubmit}>
        {!successful && (
          <>
          <span className="span2">NOME</span>
          <input type="text" placeholder="Digite seu nome completo" autocomplete="off" required 
            id='inputNome'
            name='nome'
            value={usuario.nome}
            className='input-line'
            onChange={handleChange}  />
          <span className="span2">EMAIL</span>
          <input type="email" placeholder="Digite seu email institucional" autocomplete="off" required 
            id="inputEmail" 
            name="email"
            value={usuario.email}
            className='input-line'
            onChange={handleChange}/>
            
          <div className='button-container'>
          <button type="submit" className="form-btn">Salvar Alterações</button>
          <button onClick={goTo} className='form-btn'>Fechar</button>
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

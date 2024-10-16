
import React from 'react'
import IntegranteService from '../../services/IntegranteService.js'
import NavBar from '../../components/NavBar.jsx';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import UsuarioService from '../../services/UsuarioService.js';

const IntegranteRegister = () => {
    const user = UsuarioService.getCurrentUser();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState();

    const [isVisible, setIsVisible] = useState(true);

    const closePopup = () => {
      navigate(`/showproject/` + user.id)
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(formData => ({ ...formData, [name]: value }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessful(false);

        IntegranteService.create(formData).then(
            (response) => {
                setMessage(response.data.message);
                setSuccessful(true);

            }, (error) => {
                const message = error.response.data.message;
                setMessage(message);
            }
        )
    }

  return (
    isVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
          <form onSubmit={handleSubmit}>
        {!successful && (
          <>
          <span className="span1">NOME</span>
          <input type="text" placeholder="Digite o nome do integrante" autocomplete="off" required 
            id='inputNome'
            name='nome'
            value={formData.nome}
            onChange={handleChange}  />
          <button type="submit" className="form-btn">ENVIAR</button>
          <span className="span1">RM</span>
          <input type="text" placeholder="rmXXXXX" autocomplete="off" required 
            id='inputRM'
            name='Rm'
            value={formData.rm}
            onChange={handleChange}  />
            <input type="hidden" id='inputstatusIntegrante' name="statusIntegrante" value={formData.statusIntegrante='ATIVO'} onChange={handleChange}/>
          <button type="submit" className="form-btn">ENVIAR</button>
          </>
        )}
        </form>
            <button onClick={closePopup}>Fechar</button>
          </div>
        </div>
      )
  )
}

export default IntegranteRegister

import React from 'react'
import '../../assets/style/home.css'
import { useState } from 'react'
import UsuarioService from '../../services/UsuarioService'

const AcessoNegado = () => {
    const currentUser = UsuarioService.getCurrentUser();

    const [isVisible, setIsVisible] = useState(true);

    const closePopup = () => {
      setIsVisible(false);
    };
  return (
      isVisible && (
      <div className="popup-overlay">
        <div className="popup-content">
          <p>Acesso negado! Você não tem permissão para acessar esta página.</p>
          <button onClick={closePopup}>Fechar</button>
        </div>
      </div>
    )
  )
}

export default AcessoNegado

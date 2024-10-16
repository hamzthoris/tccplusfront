import React from 'react'
import '../../assets/style/home.css'
import NavBar from '../../components/NavBar';
import UsuarioService from '../../services/UsuarioService'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Register = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(formData => ({ ...formData, [name]: value }));
    }
/*
    const onChangeType = (e) => {
        console.log(e.target.value)
        setNivel(e.target.value);
    }
*/
    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessful(false);

        UsuarioService.create(formData).then(
            (response) => {
                setMessage(response.data.message);
                setSuccessful(true);

                navigate('/login');
            }, (error) => {
                const message = error.response.data.message;
                setMessage(message);
            }
        )
    }

  return (
    <div >
      <NavBar></NavBar>
      <main className='alterbody'>
      <br></br><h1 className="titulo_login">Cadastro</h1>
      <div className="login_form">
     
        <form onSubmit={handleSubmit}>
        {!successful && (
          <>
          <span className="span1">NOME</span>
          <input type="text" placeholder="Digite seu nome completo" autocomplete="off" required 
            id='inputNome'
            name='nome'
            value={formData.nome}
            onChange={handleChange}  />
          <span className="span1">EMAIL</span>
          <input type="email" placeholder="Digite seu email institucional" autocomplete="off" required 
            id="inputEmail" 
            name="email"
            value={formData.email}
            onChange={handleChange}/>
            
          <span className="span1">SENHA</span>
          <input type="password" placeholder="Digite sua senha" required 
          id='inputSenha'
          name="senha"
          value={formData.senha}
          onChange={handleChange}
          />
          <input type="hidden" id='nivelAcesso' name="nivelAcesso" value={formData.nivelAcesso='Aluno'} onChange={handleChange}/>
          <button type="submit" className="form-btn">ENVIAR</button>
          </>
        )}
        </form>
        </div>
        <div className='underline-links'>
        <a href='/login' className='underline-link1'>Ja é cadastrado?</a> 
        </div>
        </main>
    </div>
  )
}

export default Register

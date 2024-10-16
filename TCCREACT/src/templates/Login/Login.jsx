import React from 'react'
import '../../assets/style/home.css'
import NavBar from '../../components/NavBar';
import { useState } from 'react';
import UsuarioService from '../../services/UsuarioService';
import AcessoNegado from '../Home/AcessoNegado'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Error from './Error';

const Login = () => {
  const navigate = useNavigate();

    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(formData => ({ ...formData, [name]: value }))
    }

    useEffect(()=>{
      const userJson = localStorage.getItem("user");
      console.log(userJson);
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");

        UsuarioService.signin(formData.email, formData.password).then(
            () => {
                const userJson = localStorage.getItem("user");
                console.log(userJson);
                const user = JSON.parse(userJson || '{}');

                if (user.statusUsuario == 'ATIVO' && user.nivelAcesso == 'Aluno') {
                    
                    navigate(`/showproject/${user.id}`, {state:{user: userJson}});
                } else if (user.statusUsuario == 'TROCAR_SENHA') {
                    navigate(`/newpass/` + user.id);
                }
                else if (user.statusUsuario == 'ATIVO' && user.nivelAcesso == 'Professor') {
                  navigate('/visualizar', {state:{user: userJson}});
              } 
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
  
  return (
    <div>
      <NavBar></NavBar>
      {message && <Error />}

      <main className='alterbody'>
      <br></br><br></br><h1 class="titulo_login">Login</h1>
      <div className="login_form">
     
        <form onSubmit={handleSubmit} action=''>
          <span className="span1">EMAIL</span>
          <input type="email" placeholder="Digite seu email institucional" autocomplete="off" required 
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          />
          
          <span className="span1">SENHA</span>
          <input type="password" placeholder="Digite sua senha" required 
          name='password'
          id='senha'
          value={formData.password}
          onChange={handleChange}/>


          <button type="submit" className="form-btn">ENVIAR</button>
        </form>
        
        </div>
        <div className='underline-links1'>
         <a href='/register' className='underline-link1'>Não é cadastrado?</a> 
        </div>
        </main>
    </div>
  )
}

export default Login

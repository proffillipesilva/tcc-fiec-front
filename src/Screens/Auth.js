import React from 'react'
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import axiosInstance from '../myaxios';
//import { GoogleLogin } from 'react-google-login';
import { GoogleLogin } from '@react-oauth/google';
import './login.css'
import logoGoogle from "../images/google.svg"


const Auth = (props) => {
  const [form, setform] = React.useState({email: "", password: ""})
  const dispatch = useDispatch();

  const responseGoogle = async (response) => {
    console.log(response);
    const tokenId = response.credential;
    const res = await axiosInstance.post("/auth/loginWithGoogle", { tokenId })
    const data = await res.data;
    const token = data.token;
    localStorage.setItem("token", token);
    const res2 = await axiosInstance.post("/messages/register", { fcmToken: props.token })
    dispatch({type: "LOGIN"});
  }
  

  const handleChange = e => {
    e.preventDefault();
    setform({...form, [e.target.name]: e.target.value})
  }

  const signIn = async () => {
    const res = await axiosInstance.post("/auth/signIn", form);
    const data = await res.data;
    const token = data.token;
    localStorage.setItem("token", token);
    dispatch({type: "LOGIN"});
  }
  return (
    
        <div className="container">
        <form action="#">
            <div className="title">Login</div>
            <div className="input-box underline">
                <input type="text" placeholder="Digite o Email ou Usuario" required />
                <div className="underline"></div>
            </div>
            <div className="input-box">
                <input type="password" id="senha" placeholder="Digite sua senha" required />
                <i className="uil uil-eye-slash toggle"></i>
                <div className="underline"></div>
            </div>
            <div className="conectado">
                <input  type="checkbox" name=""/><span>Mantenha-me conectado</span>
            </div>
            <div className="conectado">
                <input type="checkbox" name="" /><span>Entrar como revisor</span>
            </div>
            <div className="input-box button">
                <input type="submit" name="" value="Continuar" />
            </div>
            <div className="google">
                <button type="submit">Login com <img src={logoGoogle}/></button>
            </div>
        </form>
        
        <div className="forgot">
            <a href="reset_senha.html">Esqueceu a senha?</a>
        </div>
      </div>
  )
}

export default Auth
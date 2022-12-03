import React from 'react'
import { useDispatch } from 'react-redux';
import axiosInstance from '../myaxios';
//import { GoogleLogin } from 'react-google-login';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import ClipLoader from "react-spinners/ClipLoader";
import './login.css'
import logoGoogle from "../images/google.svg"


const Auth = (props) => {
  const [form, setform] = React.useState({reviewer: false})
  const [willLogin, setWillLogin] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
   

  const dispatch = useDispatch();

  const responseGoogle = async (response) => {
    setLoading(true)
    console.log(response);
    const tokenId = response.credential;
    const res = await axiosInstance.post("/auth/signIn", { tokenId, reviewer: form.reviewer })
    const data = await res.data;
    const token = data.token;
    localStorage.setItem("token", token);
    setLoading(false)
    //const res2 = await axiosInstance.post("/messages/register", { fcmToken: props.token })
    dispatch({ type: "LOGIN" });
  }


  const googleLogin = useGoogleLogin({
    onSuccess: credentialResponse => responseGoogle(credentialResponse),
    
  });

  const handleChange = e => {
    setform({...form, [e.target.name]: e.target.checked})
    
  }

  const login = async e => {
    e.preventDefault();
    setWillLogin(true)
  }
  return (

    <div className="container">
      {loading ?  <ClipLoader loading={loading}/> :
      <form action="#">
        <div className="title">Login</div>
        <div className="conectado">
          <input type="checkbox" name="reviewer" checked={form.reviewer} onChange={handleChange} /><span>Entrar como revisor</span>
        </div>
        <div className="google">
          {willLogin ? 
          <GoogleLogin onSuccess={responseGoogle} ></GoogleLogin> :
          <button onClick={login} type="submit">Login com <img alt="Google Icon" src={logoGoogle} /></button> }
        </div>
      </form> }
    </div>
  )
}

export default Auth

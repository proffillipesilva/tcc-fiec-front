import React from 'react'
import { useDispatch } from 'react-redux';
import axiosInstance from '../myaxios';
//import { GoogleLogin } from 'react-google-login';
import { GoogleLogin } from '@react-oauth/google';
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
    
    try{console.log(response);
      const tokenId = response.credential;
      const clientId = response.clientId;
      const res = await axiosInstance.post("/auth/signIn", { tokenId, clientId, reviewer: form.reviewer })
      const user = await res.data;
      const token = user.token;
      localStorage.setItem("token", token);
      const res2 = await axiosInstance.post("/messages/register", { fcmToken: props.token })
      await res2.data;
      dispatch({ type: "LOGIN", user });
    } finally {
      setLoading(false);
    }
    
  }




  const handleChange = e => {
    setform({...form, [e.target.name]: e.target.checked})
    
  }

  const login = async e => {
    e.preventDefault();
    setWillLogin(true)
  }
  return (

    <div className="container" id="Auth">
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

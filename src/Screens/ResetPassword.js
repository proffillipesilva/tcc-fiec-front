import React from 'react'
import './login.css'


const ResetPassword = () => {
    return (
        <div class="container">
        <form>
            <div class="title">Recuperar senha</div>
            <div class="input-box underline">
                <input id="email" type="text" placeholder="Digite o Email" required/>
                <div class="underline"></div>
            </div>
            <div class="input-box button">
                <input onclick="java()" class="toggle" type="submit" name="" value="Enviar"/>
            </div>
            <div class="input-box button" id="back">
                <a id="Btn_back" href="login.html">Voltar</a>
            </div>
        </form>
    </div>
)
}

export default ResetPassword;
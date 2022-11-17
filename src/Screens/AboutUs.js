import React from 'react'
import './sobre_nos.css'
import homeImage from "../images/info.png"
import logo from "../images/Logo.svg"


const AboutUs = () => {
    return (
        <div>
                <div class="black">
    </div>
    <div class="all">
        <div class="container">
            <img id="logo" src={logo}/>
            <button id="btn_sobre">
                <img id="info" src={homeImage}/>
                <a href="home.html">Sobre nós</a>
            </button>
            <div class="about" id="text_about">
                <p>
                    Nosso site beneficente<br/>procura explorar as <br/> vivências não <br/> compartilhadas dos <br/> nossos queridos <br/> "velhinhos" e de todas <br/> gerações passadas.
                </p>
            </div>
        </div>
        <div id="container_texts">
            <div class="texts" >
                <p id="text_1">História<br/>
                    que<br/>
                    gente fala</p>
                <p id="text_2">"Não sou velha. Sou uma <br/>
                    adolescente vintage."</p>
            </div>
                <div class="btns_flex">
                    <button class="btns" id="session"> <a id="sessão" href="login.html">Inicie sua sessão</a> </button>
                    <button class="btns" id="create"><a href="create.html">Crie sua conta</a> </button>
                </div>
        </div>
    </div>
        </div>
        )
    }
    
    export default AboutUs;
import React from 'react'
import './sobre_nos.css'
import homeImage from "../images/info.png"
import logo from "../images/Logo.svg"
import { Link } from 'react-router-dom'


const AboutUs = () => {
    return (
        <div>
                <div className="black">
    </div>
    <div className="all">
        <div className="aboutUsContainer">
            <img id="logo" src={logo} alt="logo"/>
            <button id="btn_sobre">
                <img id="info" src={homeImage} alt="nfo"/>
                <a href="home.html">Sobre nós</a>
            </button>
            <div className="about" id="text_about">
                <p>
                    Nosso site beneficente<br/>procura explorar as <br/> vivências não <br/> compartilhadas dos <br/> nossos queridos <br/> "velhinhos" e de todas <br/> gerações passadas.
                </p>
            </div>
        </div>
        <div id="container_texts">
        <iframe width="100%" height="600" title='test' src="https://www.youtube.com/embed/JVDXew1wCLg"> </iframe>
                    
            <div className="texts" >
                
            </div>
                <div className="btns_flex">
                    <button className="btns" id="session"> <Link id="sessão" to={"/auth"}>Inicie sua sessão</Link> </button>
                    <button className="btns" id="create"><Link to={"/home"}>Pagina Inicial</Link> </button>
                </div>
        </div>
    </div>
        </div>
        )
    }
    
    export default AboutUs;
import React from 'react'
import './home.css'
import homeImage from "../images/info.png"
import detail from "../images/detail.svg"
import logo from "../images/Logo.svg"


const Home = () => {
    return (
        <div>

            <div className="black">
                <img src={detail} alt="" />
            </div>
            <div className="all">
                <div className="container">
                    <img id="logo" src={logo}/>
                    <button onclick="" id="btn_sobre">
                        <img id="info" src={homeImage} alt="Icon Info" />
                        <a href="sobre_nos.html">Sobre nós</a>
                    </button>
                </div>
                <div id="container_texts">
                    <div className="texts" >
                        <p id="text_1">História<br/>
                            que<br/>
                                gente fala</p>
                            <p id="text_2">"Não sou velha. Sou uma <br />
                                adolescente vintage."</p>
                        </div>
                            <div className="btns_flex">
                                <button className="btns" id="session"><a id="sessão" href="login.html">Inicie sua sessão</a></button>
                                <button className="btns" id="create"><a href="create.html">Crie sua conta</a></button>
                            </div>
                    </div>
                </div>
            </div>
        
    )
}

export default Home;
import React from 'react'
import logo from "../images/Logo.svg"
import './escritor.css'


const Writer = () => {
    return (
        <>
        <header>
        <input type="checkbox" name="" id="chk1"/>
        <div className="logo"><a href="user.html"rel="noopener noreferrer"><img src={logo} alt=""/></a></div>
        <div className="search-box">
            <form>
                <input type="text" name="search" id="srch" placeholder="Pesquise" required/>
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>
        </div>
        <ul>
            <li><a href="user.html">Top causos</a></li>
            <li><a href="escritor.html">Crie seu causo</a></li>
            <li><a href="ilustrador.html">Poste sua ilustração</a></li>
            <li><a href="perfil.html">Meu perfil</a></li>
        </ul>
        <div className="menu">
            <label htmlFor="chk1">
                <i className="fa fa-bars"></i>
            </label>
        </div>
    </header>
    <section>
        <div className="genro">
            

                <select id="select_genro" >
                    <option value="scoredesc" selected="selected">
                        Gênero
                    </option>
                    <option value="trending">
                        Ação
                    </option>
                    <option value="trending">
                        Aventura
                    </option>
                    <option value="trending">
                        Comédia
                    </option>
                    <option value="trending">
                        Drama
                    </option>
                    <option value="trending">
                        Romance
                    </option>
                    
                </select>
        </div>
        <div className="container"> 
            <div className="card">
                <p className="causoo">Escreva seu causo: </p>
                <div className="card-body">
                    <iframe src="https://docs.google.com/document/d/13SfCFDJ7Lhttps://docs.google.com/document/d/13SfCFDJ7LQRJQOqkIGZ8LsQ0xEOc_uqTGg_Uj6darME/edit?usp=sharingQRJQOqkIGZ8LsQ0xEOc_uqTGg_Uj6darME/edit" style="border:1px #ffffff solid;" name="myiFrame" scrolling="yes" frameborder="1" marginheight="0px" marginwidth="0px" height="400px" width="600px" allowfullscreen></iframe>

                </div>

            
            </div>
            </div>
    </section>
    <div className="idade">
        
            
            <select id="pega_idade" >
                <option value="scoredesc" selected="selected">
                    classNameif. Etária
                </option>
                <option value="trending">
                    Livre
                </option>
                <option value="trending">
                    +10 anos
                </option>
                <option value="trending">
                    +12 anos
                </option>
                <option value="trending">
                    +14 anos
                </option>
                <option value="trending">
                    +18 anos
                </option>
                
                
            </select>
    </div>
    <button className="botao_enviar" type="submit">Enviar</button>
    </>
)
}

export default Writer;
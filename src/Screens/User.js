import React from 'react'
import './user.css'
import homeImage from "../images/info.png"
import logo from "../images/Logo.svg"


const User = () => {
    return (
        <>
            <header>
                <input type="checkbox" name="" id="chk1" />
                <div class="logo"><img src={logo} /></div>
                <div class="search-box">
                    <form>
                        <input type="text" name="search" id="srch" placeholder="Pesquise" required />
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </form>
                </div>
                <ul>
                    <li><a href="user.html">Top causos</a></li>
                    <li><a href="escritor.html">Crie seu causo</a></li>
                    <li><a href="perfil.html">Meu perfil</a></li>
                </ul>
                <div class="menu">
                    <label for="chk1">
                        <i class="fa fa-bars"></i>
                    </label>
                </div>
            </header>
            <section>
                <div class="container">

                    <div class="card">

                        <div class="card-header">
                            <img src="" alt="foto causo"
                                class="card-img" />
                        </div>

                        <div class="card-body">
                            <h3 class="card-local">Nome autor</h3>
                            <h2 class="card-titulo">Titulo causo</h2>
                            <p class="card-texto">
                                Resumo ou primeiro paragrafo
                            </p>
                        </div>

                        <div class="card-footer">
                            <a href="#">Ver Mais</a>
                        </div>

                    </div>

                    <div class="card">

                        <div class="card-header">
                            <img src="" alt="Foto do causo"
                                class="card-img" />
                        </div>

                        <div class="card-body">
                            <h3 class="card-local">Nome autor</h3>
                            <h2 class="card-titulo">Titulo causo</h2>
                            <p class="card-texto">
                                Resumo ou primeiro paragrafo
                            </p>
                        </div>

                        <div class="card-footer">
                            <a href="#">Ver Mais</a>
                        </div>

                    </div>

                    <div class="card">

                        <div class="card-header">
                            <img src="" alt="foto causo" class="card-img" />
                        </div>

                        <div class="card-body">
                            <h3 class="card-local">Nome autor</h3>
                            <h2 class="card-titulo">Titulo causo</h2>
                            <p class="card-texto">
                                Resumo ou primeiro paragrafo
                            </p>
                        </div>

                        <div class="card-footer">
                            <a href="#">Ver Mais</a>
                        </div>
                    </div>
                    </div>
            </section>
        </>
    )
}

export default User;
import React from 'react'
import './perfil.css'
import logo from "../images/Logo.svg"


const Profile = () => {
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
                    <li><a href="ilustrador.html">Poste sua ilustração</a></li>
                    <li><a href="perfil.html">Meu perfil</a></li>
                </ul>
                <div class="menu">
                    <label htmlFor="chk1">
                        <i class="fa fa-bars"></i>
                    </label>
                </div>
            </header>
            <div class="perfil"><img src="#" alt="" />
            </div>
            <section>
                <div class="caixa">

                    <div class="cartao">
                        <div class="cinza">
                            <h2>Pietrin rei delas</h2>
                            <h2>acima de 12 anos</h2>
                        </div>
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
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile;
import React from 'react'
import './user.css'
import homeImage from "../images/info.png"
import logo from "../images/Logo.svg"


const User = () => {
    return (
        <>
            
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
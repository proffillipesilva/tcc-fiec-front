import React from 'react'
import './user.css'
import homeImage from "../images/info.png"
import logo from "../images/Logo.svg"


const User = () => {
    return (
        <>
            
            <section>
                <div className="container">

                    <div className="card">

                        <div className="card-header">
                            <img src="" alt="foto causo"
                                className="card-img" />
                        </div>

                        <div className="card-body">
                            <h3 className="card-local">Nome autor</h3>
                            <h2 className="card-titulo">Titulo causo</h2>
                            <p className="card-texto">
                                Resumo ou primeiro paragrafo
                            </p>
                        </div>

                        <div className="card-footer">
                            <a href="#">Ver Mais</a>
                        </div>

                    </div>

                    <div className="card">

                        <div className="card-header">
                            <img src="" alt="Foto do causo"
                                className="card-img" />
                        </div>

                        <div className="card-body">
                            <h3 className="card-local">Nome autor</h3>
                            <h2 className="card-titulo">Titulo causo</h2>
                            <p className="card-texto">
                                Resumo ou primeiro paragrafo
                            </p>
                        </div>

                        <div className="card-footer">
                            <a href="#">Ver Mais</a>
                        </div>

                    </div>

                    <div className="card">

                        <div className="card-header">
                            <img src="" alt="foto causo" className="card-img" />
                        </div>

                        <div className="card-body">
                            <h3 className="card-local">Nome autor</h3>
                            <h2 className="card-titulo">Titulo causo</h2>
                            <p className="card-texto">
                                Resumo ou primeiro paragrafo
                            </p>
                        </div>

                        <div className="card-footer">
                            <a href="#">Ver Mais</a>
                        </div>
                    </div>
                    </div>
            </section>
        </>
    )
}

export default User;
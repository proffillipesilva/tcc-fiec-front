import React, { useState, useEffect } from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import { AZURE_CONTAINER_URL, BACKEND_URL } from '../constants'
import axiosInstance from '../myaxios'
import './Topcausos.css'
const TopCausos = () => {
    const [books, setbooks] = useState(null)
    const loadBooks = async () => {
        const res = await axiosInstance.get("/books")
        const data = await res.data;
        setbooks(data);
    }

    useEffect(() => {
        loadBooks();
    }, [])

    return (
        <>
            <section>
                { 

                        books != null && books.length !== 0 ?
                            books.map((book, i) => (
                                <div className="card">

                                    <div className="card-header">
                                        <img src={AZURE_CONTAINER_URL + (book.bookImage  || "undefined.png")} alt="foto causo"
                                            className="card-img" />
                                    </div>

                                    <div className="card-body">
                                        <h3 className="card-local">{book.authorName}</h3>
                                        <hr/>
                                        <h2 className="card-titulo">{book.name}</h2>
                                        <hr/>
                                        <p className="card-texto">
                                            {book.description}
                                        </p>
                                    </div>

                                    <div className="card-footer">
                                        <a href={"https://docs.google.com/document/d/" + book.docsBook} rel='noreferrer' target='_blank' >
                                            <FormattedMessage id="readStory" /></a>
                                    </div>

                                </div>
                            ))
                            : null}   
                
                <div className="card">

                    <div className="card-header">
                        <img src={"https://st2.depositphotos.com/5526774/8104/v/450/depositphotos_81046160-stock-illustration-strawberry.jpg"} alt="foto causo"
                            className="card-img" />
                    </div>

                    <div className="card-body">
                        <h3 className="card-local">Autor: Vulgo Pietrin</h3>
                        <hr/>
                        <h2 className="card-titulo">Titúlo: A vida é um morango</h2>
                        <hr/>
                        <p className="card-texto">
                            Descrição: Causo com o intuito de retratar porque a vida é um morango
                        </p>
                    </div>

                    <div className="card-footer">
                        <a href={"https://docs.google.com/document/d/13SfCFDJ7LQRJQOqkIGZ8LsQ0xEOc_uqTGg_Uj6darME"} rel='noreferrer' target='_blank' >Ler Historia</a>
                    </div>

                </div>
                <div className="card">

                    <div className="card-header">
                        <img src={"https://cdn.discordapp.com/attachments/1044656533650284584/1044663424447152168/unknown.png"}
                            className="card-img"  alt=''/>
                    </div>

                    <div className="card-body">
                        <h3 className="card-local">Autor: Kn maverick</h3>
                        <hr/>
                        <h2 className="card-titulo">Titúlo: Um dia de pesca</h2>
                        <hr/>
                        <p className="card-texto">
                            Descrição:
                            Não entre no rio, se você não consegue ver o fundo dele
                        </p>
                    </div>

                    <div className="card-footer">
                        <a href={"https://docs.google.com/document/d/1GYBM6x49sTvcqY0tiEjTD5St8moFpntl9uZIFcTohes"} rel='noreferrer' target='_blank' >Ver Mais</a>
                    </div>

                </div>
                <div className="card">

                    <div className="card-header">
                        <img src={"https://www.visaonoticias.com/images/noticias/0115075001586804067.jpg"}
                            className="card-img" alt='' />
                    </div>

                    <div className="card-body">
                        <h3 className="card-local">Autor: Fondolhaca</h3>
                        <hr/>
                        <h2 className="card-titulo">Titúlo: Loucuras no boteco</h2>
                        <hr/>
                        <p className="card-texto">
                            Descrição:
                            Nunca beba do copo de um estranho
                        </p>
                    </div>

                    <div className="card-footer">
                        <a href={"https://docs.google.com/document/d/1pgX3C5pYFYQtsM-pkpW6ZfjdZ3cY-68i44f2gh_DD74"} rel='noreferrer' target='_blank' >Ver Mais</a>
                    </div>

                </div>
            </section>
        </>

    )
}

export default TopCausos;
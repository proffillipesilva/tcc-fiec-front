import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
    

                { /*{

                        books != null && books.length != 0 ?
                            books.map((book, i) => (
                                <div class="card">

                                    <div class="card-header">
                                        <img src="" alt="foto causo"
                                            class="card-img" />
                                    </div>

                                    <div class="card-body">
                                        <h3 class="card-local">{book.author}</h3>
                                        <h2 class="card-titulo">{book.title}</h2>
                                        <p class="card-texto">
                                            {book.description}
                                        </p>
                                    </div>

                                    <div class="card-footer">
                                        <a href={"https://docs.google.com/document/d/" + book.docsBook} rel='noreferrer' target='_blank' >Ver Mais</a>
                                    </div>

                                </div>
                            ))
                            : null}*/}   
                
                <div class="card">

                    <div class="card-header">
                        <img src={"https://st2.depositphotos.com/5526774/8104/v/450/depositphotos_81046160-stock-illustration-strawberry.jpg"} alt="foto causo"
                            class="card-img" />
                    </div>

                    <div class="card-body">
                        <h3 class="card-local">Autor: Vulgo Pietrin</h3>
                        <hr/>
                        <h2 class="card-titulo">Titúlo: A vida é um morango</h2>
                        <hr/>
                        <p class="card-texto">
                            Descrição: Causo com o intuito de retratar porque a vida é um morango
                        </p>
                    </div>

                    <div class="card-footer">
                        <a href={"https://docs.google.com/document/d/13SfCFDJ7LQRJQOqkIGZ8LsQ0xEOc_uqTGg_Uj6darME"} rel='noreferrer' target='_blank' >Ver Mais</a>
                    </div>

                </div>
                <div class="card">

                    <div class="card-header">
                        <img src={"https://cdn.discordapp.com/attachments/1044656533650284584/1044663424447152168/unknown.png"}
                            class="card-img" />
                    </div>

                    <div class="card-body">
                        <h3 class="card-local">Autor: Kn maverick</h3>
                        <hr/>
                        <h2 class="card-titulo">Titúlo: Um dia de pesca</h2>
                        <hr/>
                        <p class="card-texto">
                            Descrição:
                            Não entre no rio, se você não consegue ver o fundo dele
                        </p>
                    </div>

                    <div class="card-footer">
                        <a href={"https://docs.google.com/document/d/1GYBM6x49sTvcqY0tiEjTD5St8moFpntl9uZIFcTohes"} rel='noreferrer' target='_blank' >Ver Mais</a>
                    </div>

                </div>
                <div class="card">

                    <div class="card-header">
                        <img src={"https://www.visaonoticias.com/images/noticias/0115075001586804067.jpg"}
                            class="card-img" />
                    </div>

                    <div class="card-body">
                        <h3 class="card-local">Autor: Fondolhaca</h3>
                        <hr/>
                        <h2 class="card-titulo">Titúlo: Loucuras no boteco</h2>
                        <hr/>
                        <p class="card-texto">
                            Descrição:
                            Nunca beba do copo de um estranho
                        </p>
                    </div>

                    <div class="card-footer">
                        <a href={"https://docs.google.com/document/d/1pgX3C5pYFYQtsM-pkpW6ZfjdZ3cY-68i44f2gh_DD74"} rel='noreferrer' target='_blank' >Ver Mais</a>
                    </div>

                </div>
            </section>
        </>

    )
}

export default TopCausos;
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AZURE_CONTAINER_URL, BACKEND_URL } from '../constants'
import axiosInstance from '../myaxios'
import './Topcausos.css'
const SharedCausos = () => {
    const [books, setbooks] = useState(null)
    const loadBooks = async () => {
        const res = await axiosInstance.get("/books/written")
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

                        books != null && books.length != 0 ?
                            books.map((book, i) => (
                                <div class="card">

                                    <div class="card-header">
                                        <img src={AZURE_CONTAINER_URL + (book.bookImage  || "undefined.png")} alt="foto causo"
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
                            : null}   
                
                
            </section>
        </>

    )
}

export default SharedCausos;
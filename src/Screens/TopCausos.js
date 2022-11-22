import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axiosInstance from '../myaxios'

const TopCausos = () => {
    const [books, setbooks] = useState(null)
    const loadBooks = async() =>{
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
                <div class="container">

{

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
                    : null}
                </div>

            </section>
        </>

    )
}

export default TopCausos;
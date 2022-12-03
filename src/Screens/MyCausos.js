import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BACKEND_URL } from '../constants'
import axiosInstance from '../myaxios'
import './Topcausos.css'
const MyCausos = () => {
    const [books, setbooks] = useState(null)
    const loadBooks = async () => {
        const res = await axiosInstance.get("/books/reviewer")
        const data = await res.data;
        setbooks(data);
    }

    // IMAGE PROCESSING
    const [file, setFile] = useState(null);
    const [fileDataURL, setFileDataURL] = useState(null);

    const submitImageForUser = async (id) => {
        try {
            const formData = new FormData();
            formData.append("image", file);
            const res = await axiosInstance.put(`/books/${id}`, formData);
            const user = await res.data;

        } catch (ex) {

        }
    }

    const finishBook = async (id) => {
        try {
            
            const res = await axiosInstance.put(`/reviewers/finishBook/${id}`);
            const user = await res.data;

        } catch (ex) {

        }
    }

    const changeHandler = (e) => {
        const file = e.target.files[0];

        setFile(file);
        if (file) {
            let fileReader = new FileReader();
            fileReader.onload = (e) => {
                const { result } = e.target;
                if (result) {
                    setFileDataURL(result)
                }
            }
            fileReader.readAsDataURL(file);
        }
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
                                        <img src={BACKEND_URL + "/images/" + book.bookImage} alt="foto causo"
                                            class="card-img" />
                                    </div>

                                    <div class="card-body">
                                        <h3 class="card-local">{book.author}</h3>
                                        <h2 class="card-titulo">{book.title}</h2>
                                        <p class="card-texto">
                                            {book.description}
                                            <br />Adicionar Imagem
                                        <input onChange={changeHandler} type="file" />
                                        <button onClick={() => submitImageForUser(book.bookId)}>Atualizar Imagem</button>
                                        </p>
                                    </div>

                                    <div class="card-footer">
                                        <a href={"https://docs.google.com/document/d/" + book.docsBook} rel='noreferrer' target='_blank' >Ver Mais</a>
                                        <button onClick={() => finishBook(book.bookId)} style={{float: "right"}}>Finalizar Livro</button>
                                    </div>

                                </div>
                            ))
                            : null}   
                
                
            </section>
        </>

    )
}

export default MyCausos;
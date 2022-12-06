import React, { useState, useEffect } from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import { AZURE_CONTAINER_URL, BACKEND_URL } from '../constants'
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
        console.log(file)

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
                                <div className="card">

                                    <div className="card-header">
                                        <img src={AZURE_CONTAINER_URL + (book.bookImage  || "undefined.png")} alt="foto causo"
                                            className="card-img" />
                                    </div>

                                    <div className="card-body">
                                        <h3 className="card-local">{book.author}</h3>
                                        <h2 className="card-titulo">{book.title}</h2>
                                        <p className="card-texto">
                                            {book.description}
                                            <br />
                                        </p>
                                        <div className='botoes' >
                                        <label id="mycausos-label" for='imagemInput'><div style={{float: "left"}}>Seleciona Imagem </div><span>
                                            {file?file.name:""}</span></label>
                                        <input onChange={changeHandler} type="file" id="imagemInput" style={{display: "none"}}/>
                                        
                                       
                                        </div>
                                        
                                    </div>

                                    <div className="card-footer">
                                        <button><a href={"https://docs.google.com/document/d/" + book.docsBook} rel='noreferrer' target='_blank' >
                                            <FormattedMessage id="editStory" />
                                            </a></button>
                                       
                                        <button  onClick={() => submitImageForUser(book.bookId)}><FormattedMessage id="imgUpload" /></button>
                                        <button onClick={() => finishBook(book.bookId)} ><FormattedMessage id="finishBook" /></button>
                                    </div>

                                </div>
                            ))
                            : null}   
                
                
            </section>
        </>

    )
}

export default MyCausos;
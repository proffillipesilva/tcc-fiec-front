import React, { useState, useEffect } from 'react'
import { FormattedMessage } from 'react-intl'
import MyModal from '../Layouts/MyModal'

import { AZURE_CONTAINER_URL, BACKEND_URL } from '../constants'
import axiosInstance from '../myaxios'
import './Topcausos.css'
import { Button, Col, Form, Row } from 'react-bootstrap'
const MyCausos = () => {
    const [books, setbooks] = useState(null)
    const [selectedBook, selectBook] = useState(null)
    const [showModal, setshowModal] = useState(false)
    const [emailSearch, setemailSearch] = useState(null)
    const [writerFound, setWriterFound] = useState(null)
    
    const updateForm = (e) => {
        setemailSearch(e.target.value)
    }


    // IMAGE PROCESSING
    const [file, setFile] = useState(null);
    const [fileDataURL, setFileDataURL] = useState(null);

    const loadBooks = async () => {
        const res = await axiosInstance.get("/books/reviewer")
        const data = await res.data;
        setbooks(data);
    }


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

    const searchAuthor = async (e) => {
        e.preventDefault();
        try{
        const res = await axiosInstance.post("/writers/find", {email: emailSearch})
        const writer = await res.data;
        setWriterFound(writer);
        } catch(ex) {
            setWriterFound(null);
        }
        
    }

    const inviteAuthor = async (e) => {
        e.preventDefault();
        try{
            const res = await axiosInstance.post(`/reviewers/inviteWriter/${writerFound.authorId}/book/${selectedBook.bookId}`)
            const result = await res.data;
            console.log(result)
            } catch(ex) {
                console.log(ex)
            }
            setshowModal(false)
            loadBooks();
        
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

    const openModal = (book) => {
        selectBook(book);
        setWriterFound(null);
        setemailSearch(null);
        setshowModal(true);
    }
      const closeModal = () => {
        setshowModal(false);
      }

      const confirmDelete = async () => {
        setshowModal(false);
      }

    return (
        <>

<MyModal style={{width: "80%"}} showModal={showModal}  handleCloseModal={closeModal} title="Autores do livro"
        confirmTitle="Confirmar Deleção"
        confirmOperation={confirmDelete}
        >
            <div>
                <Form>
                    <h4 style={{fontSize: "12px"}}>Adicionar autor por email</h4>
                <Form.Group as={Row} controlId="name-id">
                    <Form.Label column xs={2}><span style={{fontSize: "12px"}}>Email</span></Form.Label>
                    <Col xs={7} >
                    <Form.Control style={{fontSize: "12px"}} type="text" placeholder="Enter email" name="name" onChange={updateForm} value={emailSearch} />
                    </Col>
                    <Col xs={2} ><Button  style={{fontSize: "12px"}} onClick={searchAuthor} >Procurar</Button></Col>
                    <br />
                    <p align={"center"}>
                    <br />
                        {writerFound ? <Button onClick={inviteAuthor} variant='success' style={{fontSize: "16px"}}>Adicionar {writerFound.authorName} como co-autor</Button> : <span style={{fontSize: "12px !important"}}>Nao encontrou autor</span>}
                        <br />
                    </p>
                </Form.Group>
                </Form>
                <hr />
                <h4 style={{fontSize: "12px"}}>Lista de Co-Autores</h4>
          <table width={"100%"}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                { selectedBook != null ? selectedBook.coAuthors.map((a,i) => <tr key={i}>
                    <td>{a.authorName}</td>
                    <td>{a.authorEmail}</td>
                    </tr>)
                : null    
                }
            </tbody>
         </table>
         </div>
        </MyModal>
            <section>
    

                { 

                        books != null && books.length !== 0 ?
                            books.map((book, i) => (
                                <div className="card" key={i}>

                                    <div className="card-header">
                                        <img src={AZURE_CONTAINER_URL + (book.bookImage  || "undefined.png")} alt="foto causo"
                                            className="card-img" />
                                    </div>

                                    <div className="card-body">
                                        <h3 className="card-local">{book.authorName} <span onClick={() => openModal(book)} style={{float: "right", fontSize: "16px"}}>+ Autores</span></h3>
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
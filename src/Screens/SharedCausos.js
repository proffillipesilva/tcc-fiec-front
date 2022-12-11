import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { FormattedMessage } from 'react-intl'
import ClipLoader from "react-spinners/ClipLoader";
import { AZURE_CONTAINER_URL } from '../constants'
import axiosInstance from '../myaxios'
import './Topcausos.css'
const SharedCausos = () => {
    const [books, setbooks] = useState(null);
    const [loading, setLoading] = useState(null);
    const [bookLoading, setBookLoading] = useState([]);
    const loadBooks = async () => {
        setLoading(true);
        const res = await axiosInstance.get("/books/written")
        const data = await res.data;
        setbooks(data);
        
        setLoading(false);
        for(let i=0; i<books.length; i++) setBookLoading[i] = false;
    }

    useEffect(() => {
        loadBooks();
    }, [])

    const reviewBook = async (book, i) => {
        try {
            const bookLoaded = [...bookLoading];
            bookLoaded[i] = true;
            setBookLoading(bookLoaded)
        
        const res = await axiosInstance.post("writers/requestReview/"+book.bookId)
        await res.data;
        } finally {
            const bookLoaded = [...bookLoading];
            bookLoaded[i] = false;
            setBookLoading(bookLoaded)
    }
       
    }

    return (
        <>
            {loading ? <ClipLoader /> :
            <section>
                { 
                        books != null && books.length !== 0 ?
                            books.map((book, i) => (
                                <div className="card" key={i}>
                                    {
                                    bookLoading != null && bookLoading[i] ? <div style={{textAlign: "center", paddingTop: "50%"}} ><ClipLoader /> </div> :
                                    <> 
                                    <div className="card-header">
                                        <img src={AZURE_CONTAINER_URL + (book.bookImage  || "undefined.png")} alt="foto causo"
                                            className="card-img" />
                                    </div>

                                    <div className="card-body">
                                        <h3 className="card-local">{book.author}</h3>
                                        <h2 className="card-titulo">{book.name}</h2>
                                        <p className="card-texto">
                                            {book.description}
                                        </p>
                                    </div>

                                    <div className="card-footer">
                                        <center>
                                            <a href={"https://docs.google.com/document/d/" + book.docsBook} rel='noreferrer' target='_blank' >
                                                <FormattedMessage id="sharedEdit" />
                                                
                                            </a>
                                            <Button onClick={() => reviewBook(book, i)} style={{float: "right"}}>Revisar</Button>
                                        </center>
                                       
                                    </div>
                                   
                                    </>
                                     }
                                </div>
                            ))
                            : null}   
                
                
            </section>
            }
        </>

    )
}

export default SharedCausos;
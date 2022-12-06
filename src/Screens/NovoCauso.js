import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import FeedBack from '../Layouts/FeedBack';
import axiosInstance from '../myaxios';
import "./NovoCauso.css"

const NovoCauso = (props) => {

    const [feedBack, setfeedBack] = useState(false)
    const [isOk, setIsOk] = useState(false);

    const pathParam = useParams("id");
    const [user, setUser] = useState(null);

    const [form, setForm] = useState({ name: '', description: '', genre: '', authorName: '' })
    const updateForm = (e) => {

        setForm({ ...form, [e.target.name]: e.target.value })
    }
    // ... spread operation --> copia de uma lista ou dicionario

    const submitForm = async (e) => {
        e.preventDefault();
        try{
           
                const res = await axiosInstance.post(`/reviewers/createBook`, form);
             
                const data = await res.data;
                setfeedBack(true);
                setIsOk(true);
                setTimeout(() => setfeedBack(false), 1000);
            
        } catch(ex) {
            console.log(ex);
            setfeedBack(true);
            setIsOk(false);
        }
    }
    




    return (
        <div id="NovoCauso">
            { feedBack ? <FeedBack isOk={isOk} closeFeedBack={setfeedBack} ><div>a</div></FeedBack> : null }
            <hr />
            <h2>{pathParam.id == null ? "Cria Causo" : "Edita Causo" } </h2>
            <Form>
                <Form.Group controlId="name-id">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" name="name" onChange={updateForm} value={form.name} />
                </Form.Group>
                <Form.Group controlId="description-id">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control type="description" placeholder="Enter description" name="description" onChange={updateForm} value={form.description} />
                </Form.Group>
                <Form.Group controlId="genre-id">
                    <Form.Label>Genero</Form.Label>
                    <Form.Control type="genre" placeholder="Enter genre" name="genre" onChange={updateForm} value={form.genre} />
                </Form.Group>
                <Form.Group controlId="authorName-id">
                    <Form.Label>Nome Autor</Form.Label>
                    <Form.Control type="text" placeholder="Enter your authorName " name="authorName" onChange={updateForm} value={form.authorName} />
                </Form.Group>
                <br />
                <Button variant="success" onClick={submitForm}>
                   Criar Livro
                </Button>
            </Form>
            <hr />
            
        </div>
    )
}

export default NovoCauso
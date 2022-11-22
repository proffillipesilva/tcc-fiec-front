import React, {useState} from 'react'
import { Nav, Navbar, Offcanvas, Button, Form } from 'react-bootstrap';
import {Link, NavLink } from 'react-router-dom';
import './Header.css' 
import Logo from '../images/Logo.svg'
const Header = () => {
    

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
  <>

<header>
        <input type="checkbox" name="" id="chk1"/>
        <div class="logo"><img src={Logo} alt=""/></div>
        <ul>
            <li><a href="user.html">Top causos</a></li>

            <li><a href="ilustrador.html">Meus causos</a></li>
            <li><a href="perfil.html">Meu perfil</a></li>
        </ul>
        <div class="menu">
            <label for="chk1">
                <i class="fa fa-bars"></i>
            </label>
        </div>
    </header>
  </>
  )
}

export default Header
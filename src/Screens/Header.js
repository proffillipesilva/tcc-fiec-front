import React from 'react'
import {Link } from 'react-router-dom';
import './Header.css' 
import Logo from '../images/Logo.svg'

import { FormattedMessage } from 'react-intl';

  

const Header = (props) => {
    

return (
  <>

<header>
        <input type="checkbox" name="" id="chk1"/>
        <div className="logo"><img src={Logo} alt=""/></div>
        <ul>
            <li><Link to={"top"}><FormattedMessage id="topStories" /></Link></li>
            <li><Link to={"my"}><FormattedMessage id="myStories" /></Link></li>
            <li><Link to={"shared"}><FormattedMessage id="sharedStories" /></Link></li>
            <li><Link to={"new"}><FormattedMessage id="createStory" /></Link></li>
            
        </ul>
        <div id="profile" ><Link to={"new"}><img src={props.user.profileImage} alt="" /><span>{props.user.name?.split(" ")[0]}</span></Link></div>
        <div className="menu">
            <label htmlFor="chk1">
                <i className="fa fa-bars"></i>
            </label>
        </div>
    </header>
  </>
  )
}

export default Header
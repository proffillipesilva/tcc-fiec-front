import React, {useState, useEffect} from 'react'
import { Button } from 'react-bootstrap';
import { Toast } from 'react-bootstrap';
import {Route, Routes, Outlet} from 'react-router-dom';
import Header from './Screens/Header';


import { onMessageListener, requestForToken } from './firebase';

import { useSelector } from 'react-redux'

import Home from './Screens/Home';
import Auth from './Screens/Auth';
import TopCausos from './Screens/TopCausos';
import MyCausos from './Screens/MyCausos';
import SharedCausos from './Screens/SharedCausos';
import NovoCauso from './Screens/NovoCauso';
import AboutUs from './Screens/AboutUs';


const App = () => {

  const [fcmToken, setToken] = useState(null);
  const [notification, setNotification] = useState(null);
  const [isTokenFound, setTokenFound] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    requestForToken(setTokenFound, setToken)
  }, [])

  onMessageListener().then(payload => {
    setShow(true);
    setNotification({title: payload.notification.title, body: payload.notification.body})
    console.log(payload);
  }).catch(err => console.log('failed: ', err));
  

  const userLoggedIn = useSelector(state => state.user);

  return (  // retorna a  pagina ou porção que serah mostrada
  <div>
     <Toast onClose={() => setShow(isTokenFound && fcmToken && fcmToken.notification)} show={show} delay={3000} autohide animation style={{
          position: 'absolute',
          top: 20,
          right: 20,
        }}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">{notification && notification.title}</strong>
          </Toast.Header>
          <Toast.Body>{notification && notification.body}</Toast.Body>
          <Button onClick={() => setShow(false)}>Close Notification</Button>
          <br />
        </Toast>
        
    {userLoggedIn != null ?  <Header user={userLoggedIn} /> : null }
    
  
    <div style={{marginTop: "90px"}}>
    <Routes>
    {userLoggedIn != null ? 
      <>
      <Route path='/my' element={ <MyCausos /> } />
      <Route path='/shared' element={<SharedCausos />}/>
      <Route path='/new' element={<NovoCauso />} />
      <Route path='*' element={<TopCausos />} /> 
  
      </> :
      
      <>
      <Route path='/auth' element={<Auth token={fcmToken}/>} /> 
      <Route path='/about' element={<AboutUs/>} /> 
      <Route path='*' element={<Home token={fcmToken} />} /> 
      </> 
      }
    </Routes>
   
   
    <Outlet />
    </div>
  
  </div>
  )
  
}

export default App

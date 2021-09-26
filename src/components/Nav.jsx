import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../logo/logo.jpg'
import '../styles/Nav.css'

function Nav() {
    return (
        
      <Navbar bg="dark" variant="dark">
         <div className="cont-logo"> 
            <Navbar.Brand href="#home">
              <img alt=""src={logo} width="30" height="30" className="d-inline-block align-top"/>{' '}
             Stationary San Vicente
            </Navbar.Brand>
          </div>
      </Navbar>       
    )
}

export default Nav

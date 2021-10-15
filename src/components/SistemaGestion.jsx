import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button'
import '../styles/SistemaGestion.css'
// import swal from 'sweetalert'
import { Spinner } from "react-bootstrap";
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2/dist/sweetalert2.js'
// import mandalorian from '../logo/mandalorian.gif'


export default function SistemaGestion() {  
  
  const { user, isAuthenticated, isLoading } = useAuth0();
  Swal.fire({
    
    title: 'Ya puedes empezar a trabajar!',
    imageUrl: 'https://c.tenor.com/4P02Cdfd26MAAAAi/baby-yoda-so-cute.gif',
    imageWidth: 300,
    imageHeight: 200,
    imageAlt: 'Custom image',
    padding: '3em',
    button: false,
  })
  // swal({
    
    
  //   title: `${user.name},`,
  //   text: "Registro Exitoso",
  //   icon: "success",
  //   button: false,
    
  // });
  
  
  

  if (isLoading) {
    return <div className="spinner">
      {/* <img className="mando" src= {mandalorian} alt=""/> */}
      <Button variant="primary" disabled>
      
    <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    Loading...
  </Button></div>;
  }
 
  return (
    
    isAuthenticated && (
     
      <div className="cont-father">
        
        <div className="cont-profile">
            <img className="imp-p" src={user.picture} alt={user.name} />
            <p>{user.email}</p>
        </div>
        <div className="cont">
                <div className="cont-buttons">

                    <Link to="/Ventas" ><Button variant="primary" className="btn-usuarios">Ventas</Button></Link>
                    <Link to="/list-products" ><Button variant="primary" className="btn-productos">Productos</Button></Link> 
                    <Link to="/AgregarUsuario" ><Button variant="primary"className="btn-usuarios">Usuarios</Button></Link> 

                </div>
            </div>
            
      </div>
  
     
    )
  );
};






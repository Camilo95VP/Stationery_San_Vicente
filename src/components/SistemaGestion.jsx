import React from "react";
import { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button'
import '../styles/SistemaGestion.css'
import { Spinner } from "react-bootstrap";
import {Link} from 'react-router-dom'
// import Swal from 'sweetalert2/dist/sweetalert2.js'
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'
import Logout from "../components/Logout"
toast.configure()

export default function SistemaGestion() {  
  
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [show, setShow] = useState(true);

  const notify = () => {
    toast(`Tienes 3 secciones disponibles (Ventas, Productos, Usuarios) Puedes acceder a cada una para consultar, modificar y actualizar información, Good job!!`, {position: toast.POSITION.TOP_CENTER })
  }
  // Swal.fire({
    
  //   title: 'Ya puedes empezar a trabajar!',
  //   imageUrl: 'https://c.tenor.com/4P02Cdfd26MAAAAi/baby-yoda-so-cute.gif',
  //   imageWidth: 300,
  //   imageHeight: 200,
  //   imageAlt: 'Custom image',
  //   padding: '3em',
  //   button: false,
  // })

  
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
     <>
      <div className="cont-father">
        
        <div className="cont-profile">
            <img className="imp-p" src={user.picture} alt={user.name} />
            <p>{user.email}</p>
        </div>
        <div className="cont">
                <div className="cont-buttons">

                    <Link to="/AgregarVentas" ><Button variant="primary" className="btn-usuarios">Ventas</Button></Link>
                    <Link to="/list-products" ><Button variant="primary" className="btn-productos">Productos</Button></Link> 
                    <Link to="/AgregarUsuario" ><Button variant="primary"className="btn-usuarios">Usuarios</Button></Link> 
                   
                </div>
               
            </div>
            
      </div>
      <Logout />
  <div className="notify">
       <Button variant="warning" onClick={notify} 
       ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-index-thumb-fill" viewBox="0 0 16 16">
       <path d="M8.5 1.75v2.716l.047-.002c.312-.012.742-.016 1.051.046.28.056.543.18.738.288.273.152.456.385.56.642l.132-.012c.312-.024.794-.038 1.158.108.37.148.689.487.88.716.075.09.141.175.195.248h.582a2 2 0 0 1 1.99 2.199l-.272 2.715a3.5 3.5 0 0 1-.444 1.389l-1.395 2.441A1.5 1.5 0 0 1 12.42 16H6.118a1.5 1.5 0 0 1-1.342-.83l-1.215-2.43L1.07 8.589a1.517 1.517 0 0 1 2.373-1.852L5 8.293V1.75a1.75 1.75 0 0 1 3.5 0z"/>
     </svg></Button>
  </div>
  
 <div className="toa">
   
  <ToastContainer>
      <Toast onClose={() => setShow(false)} show={show} delay={15000} autohide>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Registro exitoso {' '} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-all" viewBox="0 0 16 16">
  <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"/>
</svg></strong>
          <small className="text-muted">just now</small>
        </Toast.Header>
        <Toast.Body> {` Hola ${user.name}, este es un sistema de gestión del cual ya haces parte.`} </Toast.Body>
      </Toast>
  </ToastContainer>

  </div>

     </>
    )
  );
};






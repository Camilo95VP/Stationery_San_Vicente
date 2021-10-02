import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button'
import '../styles/SistemaGestion.css'
import swal from "sweetalert";
import { Spinner } from "react-bootstrap";
import {Link} from 'react-router-dom'

export default function SistemaGestion() {
  
  const { user, isAuthenticated, isLoading } = useAuth0();

  swal({
    title: `Hola${user.name},`,
    text: "Bienvenido al sistema de gestión",
    icon: "success",
    button: "ok",
  });

  if (isLoading) {
    return <div className="spinner"><Button variant="primary" disabled>
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
      <div>
        <div className="cont-profile">
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
        </div>
        <div className="cont">
                <h1>Sistema de Gestión</h1>
                <div className="cont-buttons">
                    <Button variant="outline-primary">Ventas</Button>
                    <Link to="/list-products" ><Button variant="outline-primary" className="btn-productos">Productos</Button></Link> 
                    <Link to="/infovendedores" ><Button variant="outline-primary"className="btn-usuarios">Usuarios</Button></Link> 
                </div>
            </div>
      </div>
      
    )
  );
};






import React from 'react'
import Contact from '../shared/Contact'
import '../styles/Home.css'
import LoginButton from './LoginButton'
import { useAuth0 } from "@auth0/auth0-react";
import { Spinner } from "react-bootstrap";
import Button from 'react-bootstrap/Button'

export default function Home() {
    const {isLoading } = useAuth0();

    if (isLoading) {
        return <div className="spinner">
            <h3>Estamos trabajando para ti!</h3>
        <Button variant="primary" disabled>
        <Spinner as="span"  animation="grow" size="sm" role="status" aria-hidden="true"/>Loading...</Button></div>;
      }

    return (
        <>
        
         <LoginButton/>
        <div className="cont">
            <div className="cont-home">
                <h1>Bienvenido al sistema de Gestión de la Papelería San Vicente!</h1>
                <h2>Ubicados en el barrio 7 de Agosto en Bogotá, Colombia. Con más de 50 años de expericiencia en la comercialización de productos escolares, de oficina y obsequios</h2>
                <p>Aquí puede realizar tareas de gestión de ventas como registrar, actualizar y consultar ventas. Consultar nuestro portafolio de productos</p>
            </div>
            <Contact/>
        </div>
        </>
    )
}

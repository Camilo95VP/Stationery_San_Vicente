import React from 'react'
import Contact from '../shared/Contact'
import '../styles/Home.css'
export default function Home() {
    return (
        <div className="cont">
            <div className="cont-home">
                <h1>Bienvenido al sistema de Gestión de la Papelería San Vicente!</h1>
                <h2>Ubicados en el barrio 7 de Agosto en Bogotá, Colombia. Con más de 50 años de expericiencia en la comercialización de productos escolares, de oficina y obsequios</h2>
                <h3>Aquí puede realizar tareas de gestión de ventas como registrar, actualizar y consultar ventas. Consultar nuestro portafolio de productos</h3>
            </div>
            <Contact/>
        </div>
    )
}

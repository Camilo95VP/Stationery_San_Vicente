import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import '../styles/SistemaGestion.css'
import {Link} from 'react-router-dom'

export default class SistemaGestion extends Component {
    render() {
        return (
            <div className="cont">
                <h1>Sistema de Gestión</h1>
                <div className="cont-buttons">
                    <Button variant="outline-primary">Ventas</Button>
                    <Link to="/list-products" ><Button variant="outline-primary" className="btn-productos">Productos</Button></Link> 
                    <Link to="/infovendedores" ><Button variant="outline-primary"className="btn-usuarios">Usuarios</Button></Link> 
                </div>
            </div>
        )
    }
}

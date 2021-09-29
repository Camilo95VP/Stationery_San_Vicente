import React from 'react'
import Button from 'react-bootstrap/Button'
import '../styles/LoginButton.css'
import {Link} from 'react-router-dom'

export default function LoginButton() {
    return (
        <div className="cont-button" >
             <Link to="/SistemaGestion"><Button variant="success" type="submit" className="justify-content-end">Ingresar</Button></Link> 
        </div>
    )
}

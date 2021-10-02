import React from 'react'
import Button from 'react-bootstrap/Button'
import '../styles/LoginButton.css'
import {Link} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

export default function LoginButton() {
    const { loginWithRedirect } = useAuth0();
    return (
        <div className="cont-button" >
             <Link to="/SistemaGestion"><Button onClick={() => loginWithRedirect()} variant="success" type="submit" className="justify-content-end">Ingresar</Button></Link> 
        </div>
    )
}

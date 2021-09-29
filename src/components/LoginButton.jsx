import React from 'react'
import Button from 'react-bootstrap/Button'
import '../styles/LoginButton.css'

export default function LoginButton() {
    return (
        <div className="cont-button" >
            <Button variant="success" type="submit" className="justify-content-end">Ingresar</Button>
        </div>
    )
}

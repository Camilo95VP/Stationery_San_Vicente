import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import '../styles/Login.css'
import swal from 'sweetalert'



export default function Login() {

function ingresar(){
    swal({
        text: "Servicio deshabilitado",
        icon: "info",
        button: "ok",
      });
}

    return (
        <div className="cont">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <div className="label" ><Form.Check type="checkbox" label="Mostrar" /></div>
                </Form.Group>
                <div className="cont-botons" >
                    <Button variant="primary" type="submit" onClick={ingresar} >Registrarse</Button>
                    <Button variant="success" type="submit" onClick={ingresar} >Ingresar</Button>
                </div>
            </Form>
            
        </div>
        
    )
}

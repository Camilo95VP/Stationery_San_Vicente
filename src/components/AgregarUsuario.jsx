import React from 'react'
import { Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Component} from 'react'
import Table from "react-bootstrap/Table"
import swal from 'sweetalert'
import "../styles/AgregarUsuario.css"


class AgregarUsuario extends Component{
    constructor(props) {
        super(props);
        this.state = {
          nombre: '',
          email: '',
          estado: '',
          _id: '',
          usuarios: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.addUser = this.addUser.bind(this);
      }
    
      handleChange(e) {
        const { name, value } = e.target;
        this.setState({
          [name]: value
        });
      }

      addUser(e) {
        e.preventDefault();
        if(this.state._id) {
          fetch(`http://localhost:3002/api/usuarios${this.state._id}`, {
            method: 'PUT',
            body: JSON.stringify({
              nombre: this.state.nombre,
              email: this.state.email,
              estado: this.state.estado
            }),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
            .then(res => res.json())
            .then(data => {
              window.M.toast({html: 'User Updated'});
              this.setState({_id: '', nombre: '', email: '',estado: ''});
              this.fetchTasks();
            });
        } else {
          fetch('http://localhost:3002/api/usuarios', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              swal({
    
    
                title: "Usuario Agregado",
                icon: "success",
                button: true,
                
              });
              this.setState({nombre: '', email: '',estado: ''});
              this.fetchTasks();
            })
            .catch(err => console.error(err));
        }
    
      }
      editUser(id) {
        fetch(`http://localhost:3002/api/usuarios${id}`)
          .then(res => res.json())
          .then(data => {
            console.log(data);
            this.setState({
              nombre: data.nombre,
              email: data.email,
              estado: data.estado,
              _id: data._id
            });
          });
      }
      componentDidMount() {
        this.fetchTasks();
      }
    
      fetchTasks() {
        fetch('http://localhost:3002/api/usuarios')
          .then(res => res.json())
          .then(data => {
            this.setState({usuarios: data});
            console.log(this.state.usuarios);
          });
      }

render(){
    return(
      <>
      <div className="father-cont"> 
          <h2> Sistema de gestión usuarios</h2>{' '}
      </div>
        <div className="arrow">    
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
              </svg>
        </div>    
        <Container>
        <Form onSubmit={this.addUser}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control name="nombre" onChange={this.handleChange} value={this.state.nombre}  type="text" placeholder="Ingrese nombre" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" onChange={this.handleChange} value={this.state.email} type="text" placeholder="Ingrese email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Rol</Form.Label>
                <Form.Control name="estado" onChange={this.handleChange} value={this.state.estado} type="text" placeholder="Ingrese Rol" />
            </Form.Group>
            <div className="boton">
            <h9>Agrega un usuario y dale potestad de administrador o<br/>usuario. Elimina y actualiza información.</h9>
            
            <div className="cont-icons">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-text" viewBox="0 0 16 16">
                  <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                  <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"/>
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-bounding-box" viewBox="0 0 16 16">
                  <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                  </svg>
            </div>

            <Button variant="primary" type="submit" className="justify-content center" >
                Agregar Usuario
            </Button>
            </div>
</Form>
<br />
<div className="break">

</div>
<Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Editar | Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {this.state.usuarios.map(usuario => {
             return (
                <tr>
                  
                  <td>{usuario.nombre} </td>
                  <td>{usuario.email} </td>
                  <td>{usuario.estado} </td>                 
                  <td>
                      <Button variant="light" onClick={() => this.editUser(usuario._id)}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                              </svg>
                      </Button>{' '}{' '}
                      <Button variant="danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                              </svg>
                      </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
</Container>
</>
    )
}
}
export default AgregarUsuario;
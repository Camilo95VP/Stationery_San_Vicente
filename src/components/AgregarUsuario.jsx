import React from 'react'
import { Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Component} from 'react'
import Table from "react-bootstrap/Table"

class AgregarUsuario extends Component{
    constructor() {
        super();
        this.state = {
          nombre: '',
          apellido: '',
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
              apellido: this.state.apellido,
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
              this.setState({_id: '', nombre: '', apellido: '',estado: ''});
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
              window.M.toast({html: 'User Saved'});
              this.setState({nombre: '', apellido: '',estado: ''});
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
        fetch(`http://localhost:3002/api/usuarios`)
          .then(res => res.json())
          .then(data => {
            this.setState({usuarios: data});
            console.log(this.state.usuarios);
          });
      }

render(){
    return(
        <Container>
        <Form onSubmit={this.addUser}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control name="nombre" onChange={this.handleChange} value={this.state.nombre}  type="text" placeholder="Ingrese nombre" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Apellido</Form.Label>
                <Form.Control name="apellido" onChange={this.handleChange} value={this.state.apellido} type="text" placeholder="Ingrese apellido" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Estado</Form.Label>
                <Form.Control name="estado" onChange={this.handleChange} value={this.state.estado} type="text" placeholder="Password" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Guardar
            </Button>
</Form>
<Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Estado</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {this.state.usuarios.map(usuario => {
             return (
                <tr key={usuario._id}>
                  <td>{usuario.id} </td>
                  <td>{usuario.nombre} </td>
                  <td>{usuario.apellido} </td>
                  <td>{usuario.estado} </td>
                  <td>
                      <Form.Select defaultValue="Choose...">
                          <option>Admin</option>
                          <option>User</option>
                      </Form.Select>
                  </td>
                  <td>
                      <Button variant="light" onClick={this.editUser}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                              </svg>
                      </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
</Container>
    )
}
}
export default AgregarUsuario;
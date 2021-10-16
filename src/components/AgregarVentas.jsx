import React from 'react'
import { Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Component} from 'react'
import Table from "react-bootstrap/Table"
import swal from 'sweetalert'
import Swal from "sweetalert2";

import FormControl from "react-bootstrap/FormControl";


class AgregarVentas extends Component{
    constructor(props) {
        super(props);
        this.state = {
          producto: '',
          cliente: '',

          idCliente:'',
          vendedor:'',
          precio:'',
          cantidad: '',
          ventas: [],
          textBuscar: '',
          productoBackup:[],
          _id: ''
        };
      
        this.handleChange = this.handleChange.bind(this);
        this.addSell = this.addSell.bind(this);
      }

      actualizar(){
       
          swal({
    
          
            title: "Primero edite la venta y luego lo actualiza",
            icon: "error",
            button: true,
            
          });
        
      }
    
      handleChange(e) {
        const { name, value } = e.target;
        this.setState({
          [name]: value
        });
      }

      addSell(e) {
        e.preventDefault();
        if(this.state._id) {
          fetch(`http://localhost:3002/api/ventas/${this.state._id}`, {
            method: 'PUT',
            body: JSON.stringify({
              producto: this.state.producto,
              cliente: this.state.cliente,
              idCliente:this.state.idCliente,
              vendedor: this.state.vendedor,
              precio: this.state.precio,
              cantidad: this.state.cantidad
            }),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
            .then(res => res.json())
            
            .then(data => {

              this.setState({_id: '',producto: '', cliente: '',idCliente:'',vendedor:'',precio:'',cantidad:''});

              this.fetchTasks();
            });
            swal({
    
    
              title: "Venta Actualizado",
              icon: "success",
              button: true,
              
            });
            
        } else {
          fetch('http://localhost:3002/api/ventas', {
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
    
    
                title: "Venta Agregada",
                icon: "success",
                button: true,
                
              });
              

              this.setState({producto: '', cliente: '',idCliente:'',vendedor:'',precio:'',cantidad:''});

              this.fetchTasks();
            })
            .catch(err => console.error(err));
        }
    
      }
      editSell(id) {
        fetch(`http://localhost:3002/api/ventas/${id}`)
          .then(res => res.json())
          .then(data => {
            console.log(data);
            this.setState({
              producto: data.producto,
              cliente: data.cliente,

              idCliente:data.idCliente,

              vendedor: data.vendedor,
              precio: data.precio,
              cantidad: data.cantidad,
              _id: data._id
            });
          });
      }

      deleteSell(id) {
        if(Swal.fire({
          title: 'Esta seguro?',
          text: "Puedes revertir los cambios!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, eliminarlo!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Eliminado!',
              'La venta ha sido eliminado.',
              'success'
            )
          }
        })) {
          fetch(`http://localhost:3002/api/ventas/${id}`, {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              
              this.fetchTasks();
            });
        }
      }
      filter(event){
        
        var text = event.target.value
        const data = this.state.productoBackup
        const newData = data.filter(function(item){
          const itemDataClien = item.cliente.toUpperCase()
          const itemDataVend = item.vendedor.toUpperCase()
          const itemIDCliente=item.idCliente
          
          const itemID=item._id.toUpperCase()
          const campo = itemDataClien+" " + itemDataVend+ " "+itemIDCliente+" "+itemID
          const textData = text.toUpperCase()
          return campo.indexOf(textData) > -1
      })
      this.setState({
        ventas: newData,
        text: text,
    })
     }

      componentDidMount() {
        this.fetchTasks();
        
      }
    
      fetchTasks() {
        fetch(`http://localhost:3002/api/ventas`)
          .then(res => res.json())
          .then(data => {
            this.setState({ventas: data,
              productoBackup:data});
            
            console.log(this.state.ventas);
            
          });
      }
    
    render(){
      return(
        <>
        <div className="father-cont"> 
            <h2> Sistema de gestión ventas</h2>{' '}
        </div>
          <div className="arrow">    
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                </svg>
          </div>    
          <Container>
          <Form onSubmit={this.addSell}>
              <div className="cont-fatherr">
                <div className="gif1"><img src="https://c.tenor.com/kOcedOV5TlkAAAAj/coffee-make-it-rain-money.gif" alt="" />
                <h9> <span>Lleva el control de las ventas que se realizan en Stationery San Vicente.</span> </h9>
                </div>
               <div className="cont-form">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Producto</Form.Label>
                      <Form.Control name="producto" onChange={this.handleChange} value={this.state.producto}  type="text" placeholder="Ingrese producto" />
                  </Form.Group>
      
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Cliente</Form.Label>
                      <Form.Control name="cliente" onChange={this.handleChange} value={this.state.cliente} type="text" placeholder="Ingrese cliente" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>ID Ciente</Form.Label>
                      <Form.Control name="idCliente" onChange={this.handleChange} value={this.state.idCliente} type="text" placeholder="Ingrese identificador cliente" />
                  </Form.Group>

      
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Vendedor</Form.Label>
                      <Form.Control name="vendedor" onChange={this.handleChange} value={this.state.vendedor} type="text" placeholder="Quien hizo la venta?" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Precio</Form.Label>
                      <Form.Control name="precio" onChange={this.handleChange} value={this.state.precio} type="text" placeholder="Ingrese precio" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Cantidad</Form.Label>
                      <Form.Control name="cantidad" onChange={this.handleChange} value={this.state.cantidad} type="text" placeholder="Ingrese cantidad vendida" />
                  </Form.Group>
              </div>
              <div className="gif2"><img src="https://c.tenor.com/JbtCGT6pqFMAAAAj/money-money-in-the-bank.gif" alt="" /></div>
              </div>
              <div className="boton">
              
              
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
                  Agregar Venta
              </Button>
              <Button variant="success" type="submit" className="justify-content center" onClick={this.actualizar}>
                  Actualizar
              </Button>
              </div>
  </Form>
  <br />
  <div className="break">
  
  </div>
            <div className="search">    

            <input class="form-control"  placeholder="Buscar por cliente, ID cliente o id venta" value={this.state.text} onChange={(text) => this.filter(text)}/>
            </div>
  <Table striped bordered hover>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cliente</th>
                <th>ID Cliente</th>
                <th>Vendedor</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Editar | Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {this.state.ventas.map(venta => {
               return (
                  <tr key={venta._id}>
                    
                    <td>{venta.producto} </td>
                    <td>{venta.cliente} </td>
                    <td>{venta.idCliente} </td>
                    <td>{venta.vendedor} </td>
                    <td>{venta.precio} </td>
                    <td>{venta.cantidad} </td>                   
                    <td>
                        <Button variant="light" onClick={() => this.editSell(venta._id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                </svg>
                        </Button>{' '}
                        <Button variant="danger" onClick={() => this.deleteSell(venta._id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
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


export default AgregarVentas;
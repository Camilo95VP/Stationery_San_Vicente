import React from 'react'
import { Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Component} from 'react'
import Table from "react-bootstrap/Table"
import swal from 'sweetalert'
import Swal from "sweetalert2";



class AgregarVentas extends Component{
    constructor(props) {
        super(props);
        this.state = {
          producto: '',
          cliente: '',
          idCliente: '',
          vendedor:'',
          precio:'',
          cantidad: '',
          ventas: [],
          _id: ''
        };
      
        this.handleChange = this.handleChange.bind(this);
        this.addUser = this.addUser.bind(this);
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
              idCliente: this.state.idCliente,
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
              this.setState({_id: '',producto: '', cliente: '',idCliente: '',vendedor:'',precio:'',cantidad:''});
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
    
    
                title: "Venta Agregado",
                icon: "success",
                button: true,
                
              });
              
              this.setState({producto: '', cliente: '',idCliente: '',vendedor:'',precio:'',cantidad:''});
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
              idCliente: data.idCliente,
              vendedor: data.vendedor,
              precio: data.precio,
              cantidad: data.cantidad,
              _id: data._id
            });
          });
      }

      deleteUser(id) {
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

      componentDidMount() {
        this.fetchTasks();
      }
    
      fetchTasks() {
        fetch(`http://localhost:3002/api/ventas`)
          .then(res => res.json())
          .then(data => {
            this.setState({ventas: data});
            console.log(this.state.ventas);
          });
      }
    }
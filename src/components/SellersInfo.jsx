import React from 'react'
import Table from 'react-bootstrap/Table'
import '../styles/SellersInfo.css'
import Nav from '../shared/Nav'
import Contact from '../shared/Contact'
import swal from 'sweetalert'
function SellersInfo() {
  swal({
    title: "Información vendedores",
    text: "Consultar y modificar informacón",
    icon: "success",
    button: "ok",
  });
    return (
        <div>
        <Nav/>
        <div className="cont-table">
            
            <div className="title">
                <h1>Información Vendedores</h1>
            </div>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>id</th>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Teléfono</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>

</div>
<Contact/>
</div>
    )
}

export default SellersInfo
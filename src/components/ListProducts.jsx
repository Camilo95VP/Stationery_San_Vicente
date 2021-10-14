import React, { Fragment, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/ListProducts.css";
import imageNotFound from "../assets/img/undraw_Web_search_re_efla.svg";
import { getProducts, deleteProduct } from "./ListProductsService.js";
import Swal from "sweetalert2";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function ListProducts() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProductos(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const borrarProducto = (id) => {
    Swal.fire({
      title: "¿Esta seguro?",
      text: "Esta seguro de eliminar el producto",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminarlo",
    }).then((result) => {
      if (result.isConfirmed) {
        if (deleteProduct(id)) {
          const productosActuales = productos.filter(
            (producto) => producto.id !== id
          );
          setProductos(productosActuales);
          Swal.fire("Eliminado", "El producto ha sido eliminado", "success");
        } else {
          Swal.fire("Error", "El producto no ha sido eliminado", "error");
        }
      }
    });
  };

  return (
    <Fragment>
      <Container className="mb-2 mt-0">
        <Row className="mb-2">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="primary">Buscar</Button>
          </Form>
        </Row>
        <Row>
          <div className="col-4">
            <Link to="/product/new">
              <button className="btn btn-lg btn-primary">Nuevo Producto</button>
            </Link>
          </div>
        </Row>
        <Row>
          {productos.map((producto, index) => {
            return (
              <div className="col-md-4" key={producto._id}>
                <div className="card mt-3">
                  <div className="product align-items-center p-2 text-center">
                    <img
                      src={producto.url ? producto.url : imageNotFound}
                      alt={producto.title}
                      className="rounded"
                      width="160"
                      height="160"
                    />
                    <h5>{`${index + 1}. ${producto.title}`}</h5>
                    <div className="mt-3 info">
                      <span className="text1 d-block">
                        <b>Cantidad:</b> {producto.cantity}
                      </span>
                    </div>
                    <div className="cost mt-3 text-dark">
                      <span>${producto.price}</span>
                    </div>
                    <div
                      className={
                        producto.active
                          ? "alert alert-success"
                          : "alert alert-danger"
                      }
                      role="alert"
                    >
                      {producto.active ? "Activo" : "Inactivo"}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-8">
                      <Link to={`/product/${producto._id}`}>
                        <div className="p-3 edit text-center text-white mt-3 cursor">
                          <span className="text-uppercase">
                            <i className="fas fa-pen"></i>
                            Editar
                          </span>
                        </div>
                      </Link>
                    </div>
                    <div className="col-4">
                      <div
                        className="p-3 delete text-center text-white mt-3 cursor"
                        onClick={(e) => borrarProducto(producto._id)}
                      >
                        <span className="text-uppercase">
                          <i className="far fa-trash-alt"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Row>
      </Container>
    </Fragment>
  );
}

export default ListProducts;

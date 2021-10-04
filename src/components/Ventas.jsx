import React, { Fragment } from "react";
import { Container, Row } from "react-bootstrap";
import "../styles/Ventas.css";

function ListProducts() {
  let productos = [
    {
      id: 0,
      nombre: "Cuadernos",
      precio: 2000,
      imagen:
        "https://st.depositphotos.com/1875497/3781/i/600/depositphotos_37810929-stock-photo-books-on-white.jpg",
    },
    {
      id: 1,
      nombre: "Colores",
      precio: 5000,
      imagen:
        "https://panamericana.vteximg.com.br/arquivos/ids/343890-600-690/ecolapices-faber-castell-supersoft-por-12-unidades-7891360662471.jpg?v=637135805926930000",
    },
    {
      id: 2,
      nombre: "Resma",
      precio: 10000,
      imagen:
        "https://medios.papeleriamodelo.com/wp-content/uploads/2015/06/resma-carta-reprograf.jpg",
    },
    {
      id: 3,
      nombre: "Borrador",
      precio: 1000,
      imagen:
        "https://distribuidorasurtitodo.com.co/wp-content/uploads/2020/08/borrador-pelikan-pz-20-grande-unidad.jpg",
    },
  ];

  return (
    <Fragment>
      <Container className="mb-5 mt-5">
        <Row>
          {productos.map((producto, index) => {
            return (
              <div className="col-md-4" key={producto.id}>
                <div className="card mt-3">
                  <div className="product align-items-center p-2 text-center">
                    <img
                      src={producto.imagen}
                      alt=""
                      className="rounded"
                      width="160"
                      height="160"
                    />
                    <h5>{`${index + 1}. ${producto.nombre}`}</h5>
                    {/**
                      <div className="mt-3 info">
                        <span className="text1 d-block">SUbtitulo</span>
                        <span className="text1"> otro</span>
                      </div>
                       */}
                    <div className="cost mt-3 text-dark">
                      <span>${producto.precio}</span>
                    </div>
                  </div>
                  <div className="p-2 edit text-center text-white mt-2 cursor">
                    <span className="text-uppercase">
                      
                      Vender
                    </span>
                  </div>
                  <div className="p-3 edit text-center text-white mt-3 cursor">
                    <span className="text-uppercase">
                      
                      Total vendidos: --
                    </span>
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

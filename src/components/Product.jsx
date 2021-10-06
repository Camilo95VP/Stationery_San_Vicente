import React, { useState } from "react";
import { useParams } from "react-router";
import { getProduct, setProduct } from "./ListProductsService";
import "../styles/Product.css";
import { Container, Form } from "react-bootstrap";
import Swal from "sweetalert2";

const Product = () => {
  let { id } = useParams();
  const [producto, setProducto] = useState(id !== "new" ? getProduct(id) : {});

  const handleInputChange = (event) => {
    setProducto({
      ...producto,
      [event.target.name]: event.target.value,
    });
  };

  let buscarImagen = async () => {
    const { value: file } = await Swal.fire({
      title: "Seleccione una imagen",
      input: "file",
      inputAttributes: {
        accept: "image/*",
        "aria-label": "Upload your profile picture",
      },
    });

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        Swal.fire({
          title: "Tu imagen seleccionada",
          imageUrl: e.target.result,
          imageAlt: "The uploaded picture",
        });
        setProducto({
          ...producto,
          ["imagen"]: e.target.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const guardar = (event) => {
    event.preventDefault();
    if (producto.id === undefined) producto.id = "new";
    setProduct(producto);
    Swal.fire({
      icon: "success",
      title: producto.id === "new" ? "Producto Creado" : "Producto Actualizado",
    });
  };

  return (
    <>
      <Container className="mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card text-dark bg-light mb-2">
              <div className="card-body">
                <Form onSubmit={guardar}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      name="nombre"
                      placeholder="Nombre"
                      onChange={handleInputChange}
                      value={producto.nombre}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="precio"
                      name="precio"
                      placeholder="Precio"
                      onChange={handleInputChange}
                      value={producto.precio}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="cantidad"
                      name="cantidad"
                      placeholder="Cantidad"
                      onChange={handleInputChange}
                      value={producto.cantidad}
                    />
                  </div>
                  <div className="mb-3">
                    <button
                      className="btn btn-secondary btn-lg"
                      type="button"
                      id="imagen"
                      onClick={buscarImagen}
                    >
                      Imagen
                    </button>
                  </div>
                  <div className="input-group mb-3">
                    <label
                      className="input-group-text"
                      htmlFor="inputGroupSelect01"
                    >
                      Categoria
                    </label>
                    <select className="form-select" id="inputGroupSelect01">
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      id="descripcion"
                      name="descripcion"
                      rows="3"
                      placeholder="Descripcion"
                      onChange={handleInputChange}
                      value={producto.descripcion}
                    ></textarea>
                  </div>
                  <button className="btn btn-success btn-block" type="submit">
                    Guardar
                  </button>
                </Form>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-dark bg-light text-center">
              <img
                src={producto.imagen}
                className="card-img-top"
                alt={producto.nombre}
              />
              <div className="card-body">
                <h3>
                  <b>Nombre:</b> {producto.nombre}
                </h3>
                <p>
                  <b>Precio:</b> ${producto.precio}
                </p>
                <p>
                  <b>Cantidad:</b> {producto.cantidad}
                </p>
                <p>
                  <b>Categoria:</b>
                </p>
                <p>
                  <b>Descripcion:</b> {producto.descripcion}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Product;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProduct, setProduct } from "./ListProductsService";
import "../styles/Product.css";
import imageNotFound from "../assets/img/undraw_Web_search_re_efla.svg";
import { Container, Form } from "react-bootstrap";
import Swal from "sweetalert2";

const Product = () => {
  let { id } = useParams();
  const [producto, setProducto] = useState({});

  useEffect(() => {
    getProduct(id)
      .then((res) => {
        setProducto(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

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
          ["url"]: e.target.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const guardar = (event) => {
    event.preventDefault();
    if (producto._id === undefined) producto._id = "new";
    if (producto.cantity < 0) {
      Swal.fire({
        icon: "warning",
        title: "La cantidad debe ser igual o mayor a 0",
      });
    } else {
      setProduct(producto);
      Swal.fire({
        icon: "success",
        title:
          producto.id === "new" ? "Producto Creado" : "Producto Actualizado",
      });
    }
  };

  return (
    <>
      <Container className="mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <h1>Producto</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card text-dark bg-light mb-2">
              <div className="card-body">
                <Form onSubmit={guardar}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      placeholder="Nombre"
                      onChange={handleInputChange}
                      value={producto.title}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="price"
                      name="price"
                      placeholder="Precio"
                      onChange={handleInputChange}
                      value={producto.price}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="cantity"
                      name="cantity"
                      placeholder="Cantidad"
                      onChange={handleInputChange}
                      value={producto.cantity}
                    />
                  </div>
                  <div className="mb-3">
                    <button
                      className="btn btn-secondary btn-lg"
                      type="button"
                      id="url"
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
                      id="description"
                      name="description"
                      rows="3"
                      placeholder="Descripcion"
                      onChange={handleInputChange}
                      value={producto.description}
                    ></textarea>
                  </div>
                  <div class="form-group form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="active"
                      name="active"
                      onChange={handleInputChange}
                      value={producto.active}
                    />
                    <label class="form-check-label" for="exampleCheck1">
                      {producto.active ? "Desactivar" : "Activar"}
                    </label>
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
                src={producto.url ? producto.url : imageNotFound}
                className="card-img-top"
                alt={producto.title}
              />
              <div className="card-body">
                <h3>
                  <b>Nombre:</b> {producto.title}
                </h3>
                <p>
                  <b>Precio:</b> ${producto.price}
                </p>
                <p>
                  <b>Cantidad:</b> {producto.cantity}
                </p>
                <p>
                  <b>Categoria:</b>
                </p>
                <p>
                  <b>Descripcion:</b> {producto.description}
                </p>
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
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Product;

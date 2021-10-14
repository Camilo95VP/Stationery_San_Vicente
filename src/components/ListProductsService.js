import axios from "axios";
import { Path } from "../config";

let Productos = [
  {
    id: 0,
    nombre: "Cuadernos",
    precio: 2000,
    imagen:
      "https://st.depositphotos.com/1875497/3781/i/600/depositphotos_37810929-stock-photo-books-on-white.jpg",
    cantidad: 10,
    descripcion: "descripcion del producto",
  },
  {
    id: 1,
    nombre: "Colores",
    precio: 5000,
    imagen:
      "https://panamericana.vteximg.com.br/arquivos/ids/343890-600-690/ecolapices-faber-castell-supersoft-por-12-unidades-7891360662471.jpg?v=637135805926930000",
    cantidad: 10,
    descripcion: "descripcion del producto",
  },
  {
    id: 2,
    nombre: "Resma",
    precio: 10000,
    imagen:
      "https://medios.papeleriamodelo.com/wp-content/uploads/2015/06/resma-carta-reprograf.jpg",
    cantidad: 10,
    descripcion: "descripcion del producto",
  },
  {
    id: 3,
    nombre: "Borrador",
    precio: 1000,
    imagen:
      "https://distribuidorasurtitodo.com.co/wp-content/uploads/2020/08/borrador-pelikan-pz-20-grande-unidad.jpg",
    cantidad: 10,
    descripcion: "descripcion del producto",
  },
];

export function getProducts() {
  return axios.get(`${Path.url}/products`);
}

export function getProduct(id) {
  return axios.get(`${Path.url}/products/${id}`);
}

export function setProduct(producto) {
  if (producto.id === "new") {
    producto.id = Date.now();
    Productos.push(producto);
  } else {
    let index = Productos.findIndex((res) => res.id === producto.id);
    Productos[index] = producto;
  }
}

export function deleteProduct(id) {
  if (id !== undefined) {
    if (Productos.findIndex((producto) => producto.id === id) >= 0) {
      const productosActualizados = Productos.filter(
        (producto) => producto.id !== id
      );
      Productos = productosActualizados;
      return true;
    }
    return false;
  }
}

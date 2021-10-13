var express = require("express");
var cors = require("cors");
var mongoose = require("mongoose");
const cors = require("cors");
var app = express();

const userDB = "dbUserApp";
const passDB = "QsSK8JN1shm2neR6";
const dBase = "GestionSanVicente";

const productsRoutes = require("./routes/products");
const categoriaRoutes = require("./routes/categoria");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://" +
      userDB +
      ":" +
      passDB +
      "@sanvicente.l1mmx.mongodb.net/" +
      dBase +
      "?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Estamos conectados");
  });

app.use("/api/products", productsRoutes);
app.use("/api/categoria", categoriaRoutes);

module.exports = app;

var express = require("express");
var mongoose = require("mongoose");
var app = express();

const userDB = "dbUserApp";
const passDB = "QsSK8JN1shm2neR6";
const dBase = "GestionSanVicente";

const productsRoutes = require("./routes/products");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(
    "mongodb+srv://"+userDB+":"+passDB+"@sanvicente.l1mmx.mongodb.net/"+dBase+"?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Estamos conectados");
  });

app.use("/api/products", productsRoutes);

module.exports = app;
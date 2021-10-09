const product = require("../models/producto");

exports.getProducts = (req, res) => {
  product.find({}).then((productoResult) => {
    res.status(200).json(productoResult);
  });
};

exports.addProduct = (req, res) => {
  const productAdd = new product({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    url: req.body.url,
    category: req.body.category,
    cantity: req.body.cantity,
  });

  productAdd.save().then((createdProduct) => {
    console.log(createdProduct);
    res.status(201).json("Creado satisfactoriamente");
  });
};

exports.getProductId = (req, res) => {
  product.findById(req.params.id).then((productoResult) => {
    if (productoResult) {
      res.status(200).json(productoResult);
    } else {
      res.status(404).json("Producto no encontrado");
    }
  });
};

exports.getProductoDisponible = (req, res) => {
  product.find({ disponible: true }).then((productoResult) => {
    res.status(200).json(productoResult);
  });
};
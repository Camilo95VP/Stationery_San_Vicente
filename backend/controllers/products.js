const product = require("../models/producto");

exports.getProducts = (req, res) => {
  product.find({}).then((productoResult) => {
    console.log("Lista de productos solicitados");
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
    console.log("Producto creado: " + createdProduct._id);
    console.log(createdProduct);
    res.status(201).json("Creado satisfactoriamente");
  });
};

exports.updateProduct = (req, res) => {
  let id = req.params.id;
  if (req.body) {
    product.findByIdAndUpdate(id, req.body).then(() => {
      console.log("Producto actualizado");
      res.status(200).send();
    });
  } else {
    res.status(500).send();
  }
};

exports.deleteProduct = (req, res) => {
  let id = req.params.id;
  product.findByIdAndDelete(id).then((resul) => {
    console.log("Producto eliminado");
    res.status(200).send();
  });
};

exports.getProductId = (req, res) => {
  product.findById(req.params.id).then((productoResult) => {
    if (productoResult) {
      console.log("Producto encontrado: " + productoResult._id);
      res.status(200).json(productoResult);
    } else {
      res.status(404).json("Producto no encontrado");
    }
  });
};

exports.getProductIdLazyLoading = (req, res) => {
  product
    .findById(req.params.id)
    .populate("categoria")
    .then((productoResult) => {
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

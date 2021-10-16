const express = require('express');
const router = express.Router();

// Task Model
const Venta = require('../models/ventas');

// GET all Tasks
router.get('/', async (req, res) => {
  const tasks = await Venta.find();
  res.json(tasks);
});

// GET all Tasks
router.get('/:id', async (req, res) => {
  const task = await Venta.findById(req.params.id);
  res.json(task);
});

// ADD a new task
router.post('/', async (req, res) => {
  const { producto, cliente,idCliente,vendedor,precio,cantidad } = req.body;
  const task = new Venta({producto, cliente,idCliente,vendedor,precio,cantidad});
  await task.save();
  res.json({status: 'Sell Saved'});
});

// UPDATE a new task
router.put('/:id', async (req, res) => {
  const { producto, cliente,idCliente,vendedor,precio,cantidad } = req.body;
  const newTask = {producto, cliente,idCliente,vendedor,precio,cantidad};
  await Venta.findByIdAndUpdate(req.params.id, newTask);
  res.json({status: 'Sell Updated'});
});

router.delete('/:id', async (req, res) => {
  await Venta.findByIdAndRemove(req.params.id);
  res.json({status: 'Sell Deleted'});
});

module.exports = router;
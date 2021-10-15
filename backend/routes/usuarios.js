const express = require('express');
const router = express.Router();

// Task Model
const Usuario = require('../models/usuarios');

// GET all Tasks
router.get('/', async (req, res) => {
  const tasks = await Usuario.find();
  res.json(tasks);
});

// GET all Tasks
router.get('/:id', async (req, res) => {
  const task = await Usuario.findById(req.params.id);
  res.json(task);
});

// ADD a new task
router.post('/', async (req, res) => {
  const { nombre, apellido,estado } = req.body;
  const task = new Usuario({nombre,apellido,estado});
  await task.save();
  res.json({status: 'User Saved'});
});

// UPDATE a new task
router.put('/:id', async (req, res) => {
  const { nombre, apellido,estado } = req.body;
  const newTask = {nombre, apellido,estado};
  await Usuario.findByIdAndUpdate(req.params.id, newTask);
  res.json({status: 'User Updated'});
});

router.delete('/:id', async (req, res) => {
  await Usuario.findByIdAndRemove(req.params.id);
  res.json({status: 'User Deleted'});
});

module.exports = router;
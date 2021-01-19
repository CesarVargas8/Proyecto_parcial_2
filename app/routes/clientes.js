var router = require('express').Router()
var clienteController=require('../controllers/clienteController');
const { searchid } = require('../controllers/clientesController');
const { list } = require('../controllers/clientesController');
const { create } = require('../controllers/clientesController');
const { borrar } = require('../controllers/clientesController');

router.get('/', function(req, res) {
  clienteController.list(req,res);
})
router.get('/:id', function(req, res) {
  clienteController.searchid(req,res);
})
router.post('/', function(req, res) {
  clienteController.create(req,res);
})
router.delete('/:id', function(req, res) {
  clienteController.borrar(req,res);
})
module.exports = router 
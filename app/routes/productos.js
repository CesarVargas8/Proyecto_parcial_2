var router = require('express').Router()
var clienteController=require('../controllers/productosControllers');
const { searchid } = require('../controllers/productosControllers');
const { list } = require('../controllers/productosControllers');
const { create } = require('../controllers/productosControllers');
const { borrar } = require('../controllers/productosControllers');

router.get('/', function(req, res) {
  productosController.list(req,res);
})
router.get('/:id', function(req, res) {
  productosController.searchid(req,res);
})
router.post('/', function(req, res) {
  productosController.create(req,res);
})
router.delete('/:id', function(req, res) {
  clienteController.delete(req,res);
})
module.exports = router 
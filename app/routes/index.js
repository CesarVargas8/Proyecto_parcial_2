var router = require('express').Router()

var clientes = require('./clientes')
router.use('/clientes', clientes)

var productos = require('./productos')
router.use('/productos', productos)


router.get('/', function (req, res) {
  res.status(200).json({ message: 'Estás conectado a la API' })
})
//localhost:1339/api
module.exports = router 
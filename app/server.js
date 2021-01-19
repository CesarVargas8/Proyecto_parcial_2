var express = require('express')
var app = express()       
var cors=require('cors');
var bodyParser = require('body-parser')        
var mysql=require('../db/mysql');
var jwt=require('jsonwebtoken');
var config=require('./configs/config');
app.set('llave',config.llave);
 
 
var port = process.env.PORT || 8080 
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())            

var rutaValidacion=require('express').Router();
var router = require('./routes')
 
 
/*app.post('/autenticar', (req, res) => {
      if(req.body.usuario === "root" && req.body.contrasena === "12345") {
    const payload = {
     check:  true
    };
    const token = jwt.sign(payload, app.get('llave'), {
     expiresIn: 1440
    });
    res.json({
     mensaje: 'Autenticación correcta',
     token: token
    });
      } else {
          res.json({ mensaje: "Usuario u contraseña incorrectos"})
      }
  });
 
  const rutasProtegidas = express.Router(); 
rutasProtegidas.use((req, res, next) => {
    const token = req.headers['access-token'];
	
    if (token) {
      jwt.verify(token, app.get('llave'), (err, decoded) => {      
        if (err) {
          return res.json({ mensaje: 'Token inválida' });    
        } else {
          req.decoded = decoded;    
          next();
        }
      });
    } else {
      res.send({ 
          mensaje: 'Token no proveída.' 
      });
});*/
app.use('/api', router)
app.listen(port)
console.log('API escuchando en el puerto ' + port)
const express= require('express')
const rutas= express.Router()
const usuarioRuta= require('./usuarioRutas')

rutas.use('/', usuarioRuta)

module.exports=rutas
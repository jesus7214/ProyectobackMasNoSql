const express = require("express");
const rutas = express.Router();
const usuarioControlador = require("../controles/usuarioControlador");

rutas.get("/user", usuarioControlador.traerTodosUsuarios);
rutas.post("/user", usuarioControlador.crearUsuarios);
rutas.delete("/user/:id", usuarioControlador.eliminarUsuarios);
rutas.put("/user/:id", usuarioControlador.actualizarUsuarios)

module.exports = rutas;

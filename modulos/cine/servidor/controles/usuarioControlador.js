const Usuario = require("../modelos/usuarioModel");

exports.traerTodosUsuarios = async (req, res) => {
  const user = await Usuario.find();
  return res.status(200).json(user);
};

exports.crearUsuarios = async (req, res) => {
  const nuevoUsuario = new Usuario({ ...req.body }); // los 3 puntos (...) es para decrile que tome todo lo que hay en el cuerpo
  const insertarUsuario = await nuevoUsuario.save();
  return res.status(201).json(insertarUsuario);
};

exports.actualizarUsuarios = async (req, res) =>{
  const {id} = req.params
  await Usuario.updateOne({_id: id}, {...req.body}) // el _id: se deja con raya al piso  porque así es que lo crea Mongo y
  // el updateOne es también palabra de Mongose obligatoria para actualizar
  const actualizarUsuarios = await Usuario.findById(id) 
  return res.status(200).json(actualizarUsuarios)
}

exports.eliminarUsuarios = async (req, res) => {
  const { id } = req.params;

  try {
    const UsuarioEliminado = await Usuario.findByIdAndRemove(id);

    if (!UsuarioEliminado) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar el usuario"});
  }
};

const mongoose= require('mongoose')

const esquemaUsuario= mongoose.Schema({
  
    DNI:{
        type: Number,
        required: true
    },
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    fecha_nacimiento: {
        type: Date,
        required: true
    },
    Rol:{
        type: String,
        required: true
    },
    telefono:{
        type: String,
        required: true
    },
    coreo:{
        type: String,
        required: true
    },
    contraseña:{
        type: String,
        required: true
    },
   nombre_usuario:{
        type: String,
        required: true
    },
    clientes:{
        type: Number,
        required: true
    }
})

const user= mongoose.model("usuario", esquemaUsuario) // el nombre de la tabla está dentr de las comillas "usuario" y 
// cuando de exporta desde postman los datos a Mongo automáticamente lo pluraliza Mongo el nombre y
// lo deja en este caso nombre de la tabla "libros"
module.exports= user
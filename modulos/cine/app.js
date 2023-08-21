const express = require("express");
const app = express();
const port = 3000;
const rutas = require("./servidor/rutas/router");
const mongoose = require("mongoose");
const authMiddelware = require("./servidor/controles/autoriz");

app.use(express.json());

app.get("/api", (req, res) => {
  res.send("hola proyecto back + nosql");
});

app.use('/api', authMiddelware)
app.use("/api", rutas);

// conexion a Mongo
const conexionMongo = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://jesus:Andromeda5.@proyectobacknosq.dnw3l5h.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("conexion a mongo ok");
  } catch (err) {
    console.log(err);
  }
};

conexionMongo();

app.listen(port, () => {
  console.log("corriendo servidor ok");
});

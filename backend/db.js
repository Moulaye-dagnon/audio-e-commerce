const mongoose = require("mongoose");
require("dotenv").config();

module.exports = mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Conexion a la base de donné reussie"))
  .catch(() => console.log("Probleme lors de connexion a la base de donné"));

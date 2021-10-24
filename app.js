const express = require("express");
const app = express();
const routes = require('./routes');
let mongoose = require("mongoose");
require("dotenv").config();


mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Conectados a la base de datos");
})
.catch((err)=>{
    console.log("Error al conectar la base de datos",err);
    proccess.exit();
});


app.use(express.json());
app.get("/", (req, res) => {
    res.json({
      message: "Welcome to API",
    });
  });

app.use('/cursos', routes);  

app.listen(3000,()=>console.log("Servidor en el puerto 3000"));
const express = require('express')
const carrerasRoute = require('./routes/carrera.routes')
const materiasRoute = require('./routes/materia.routes')

const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(materiasRoute)
app.use(carrerasRoute)

app.listen(PORT,()=>{
    console.log(`Server running on https://localhost:${PORT}`);
})


console.log("Bienvenido al TP de Taller de Programación de la UNPAZ 2024.")
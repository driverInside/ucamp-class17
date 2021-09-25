// 1. importar mis dependencias
const express = require('express')
// 2. Creo el obj de mi aplicación
const app = express()

const PORT = 5000

// req = request | Representa la petición
// res = response | Representa la respuesta que voy a regresar
// 3. Defino mis RUTAS
app.use('/', (req, res) => {
  res.send({
    message: 'Hola mundo'
  })
})

// echo a andar mi app
app.listen(PORT, () => {
  console.log(`La servidor está corriendo en el puerto: ${PORT}`)
})

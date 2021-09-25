const express = require('express')
const app = express()

const { coursesRouter, productsRouter } = require('./api')

const PORT = 5001

app.use('/courses', coursesRouter)
app.use('/products', productsRouter)

// HTTP Verbs:  GET POST PUT DELETE PATCH* OPTION
app
  .get('/', (_, res) => {
    res.send({
      message: 'verbo get'
    })
  })
  .post('/ucampers', (_, res) => {
    res.send({
      message: 'yo soy post'
    })
  })
  .delete('/', (_, res) => {
    res.send({
      message: 'Viva ucamp c1'
    })
  })

app.listen(PORT, () => {
  console.log(`La servidor está corriendo en el puerto: ${PORT}`)
})

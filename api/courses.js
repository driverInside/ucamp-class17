// router
const express = require('express')
const router = express.Router()
// REST conventions

/**
 * CRUD
 *            | Descripción           | Http verb     | SQL
 * C - CREATE  Crear un objecto nuevo  POST            INSERT   CREATE
 * R - READ    Obtener                 GET             SELECT   SHOW
 * U - UPDATE  Actualizar              PUT/PATCH       UPDATE   ALTER
 * D - DELETE  Eliminar                DELETE          DELETE   DROP
 */

const courses = [
  {
    id: 1,
    name: 'Introducción al análisis matemático',
    clave: '123-213',
    objetive: 'lorem ipsum',
    description: 'Esta es una descripción'
  },
  {
    id: 2,
    name: 'Algoritmos 1',
    clave: 'LVM09876',
    description: 'Foo -bar y así',
    grade: '3'
  }
]

router
  .get('/', (req, res) => {
    res.send(courses)
  })
  .get('/:id', (req, res) => {
    const { id } = req.params // const id = req.params.id

    const idNum = Number(id)
    const courseById = courses.find(course => course.id === idNum)

    if (!courseById) {
      res.status(404)
      return res.send({
        error: 'Course not found'
      })
    }

    res.send(courseById)
  })

module.exports = router

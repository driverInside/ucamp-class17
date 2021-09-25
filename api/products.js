const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send({
    message: 'products'
  })
})

module.exports = router

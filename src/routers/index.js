const express = require('express')
const router = express.Router()
const routerProduct = require('./product')

router
  .use('/products', routerProduct)

module.exports = router

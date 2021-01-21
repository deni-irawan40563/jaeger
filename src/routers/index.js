const express = require('express')
const router = express.Router()
const routerProduct = require('./product')
const routerLogin = require('./users')

router
  .use('/products', routerProduct)
  .use('/users', routerLogin)

module.exports = router

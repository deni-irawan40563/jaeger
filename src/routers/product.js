const express = require('express')
const router = express.Router()

const productController = require('../controllers/product')
const {upload} = require('../middleware/multer')

router
  .get('/', productController.getAllData)
  .post('/', upload, productController.createData)
  .patch('/:id',upload, productController.updateData)
  .delete('/:id', productController.deleteData)

module.exports = router

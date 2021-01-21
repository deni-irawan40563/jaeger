const express = require('express')
const router = express.Router()
const productController = require('../controllers/product')
const {upload} = require('../middleware/multer')
const users = require('../controllers/users')
const passport = require('passport')
const helpers = require('../helpers/helpers')


router
  .get('/auth/success', passport.authenticate('google', { failureRedirect: '/failed' }), function(req, res) {res.redirect('/api/v1/products');})
  .get('/failed', (req, res)=>{helpers.response(res, result, 401, null, "Login with google failed")})
  .get('/', users.isLogIn, productController.getAllData)
  .post('/', upload, productController.createData)
  .patch('/:id',upload, productController.updateData)
  .delete('/:id', productController.deleteData)
module.exports = router

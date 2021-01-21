const express = require('express')
const router = express.Router()
const passport = require('passport')
const loginController = require('../controllers/users')
const helpers = require('../helpers/helpers')

router
  .get('/auth/google', passport.authenticate('google', { scope: ['profile','email'] }))
  .get('/logout', loginController.logout)
  .post('/register', loginController.register)

module.exports = router
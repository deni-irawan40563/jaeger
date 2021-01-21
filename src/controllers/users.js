const helpers = require('../helpers/helpers')
const modelUser = require('../models/users')
const bcrypt = require('bcrypt')
const saltRounds = 10
const salt = bcrypt.genSaltSync(saltRounds)

module.exports = {
  isLogIn: (req, res, next) => {
    if(req.user){
      next()
    }else{
      helpers.response(res, 0, 401, null, 'access forbidden')
    }
  },
  logout: (req, res)=>{
    req.session = null
    req.logOut()
    res.redirect('/')
  },
  register: (req, res) => {
    const { username, email, password} = req.body
    const data = {
      username,
      roleId : 6,
      email,
      password,
    }
    bcrypt.hash(password, salt, function (err, hash) {
      data.password = hash
      modelUser.register(data)
        .then((result) => {
          helpers.response(res, result, 201, null, `register successfully, wellcome : ${data.username}`)
        })
        .catch((err) => {
          console.log(new Error(err))
        })
    })
  }
}
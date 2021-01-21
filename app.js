require('dotenv').config()
require('./src/middleware/passwordJs')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const helpers = require('./src/helpers/helpers')
const morgan = require('morgan')
const cors = require('cors')
const routes = require('./src/routers/index')
// const passwordJs = require('./src/middleware/passwordJs')
const passport = require('passport')
const cookieSession = require('cookie-session')
// use module
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))

// parse application/json
app.use(bodyParser.json())
// use morgan
app.use(morgan('dev'))
// use cors
app.use(cors())
// use cookie-session
app.use(cookieSession({
  name: 'login-session',
  keys: ['key1', 'key2']
}))
// use passwordJs
app.use(passport.initialize());
app.use(passport.session());
// use custom params
app.use('/api/v1/', routes)

// const isLogIn = (req, res, next)=>{
//   if(req.user){
//     next()
//   }else{
//     helpers.response(res, result, 401, null, 'access forbidden')
//   }
// }

app.get('/',(req, res) => res.send("please add /api/v1/paramsname in url"))

// config PORT on .env
const PORT = process.env.PORT

app.use('/uploads/image', express.static('./src/uploads/image'))

app.listen(PORT, () => {
  console.log('Server Running Success ✅ \nFollow Link :')
  console.log(`\x1b[36m%s\x1b[0m`,`http://localhost:${PORT}`)
})

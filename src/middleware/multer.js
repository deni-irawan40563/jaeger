const multer = require('multer')
const path = require('path')
const helpers = require('../helpers/helpers')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, './src/uploads/image')
  }, 
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/[\/\\:]/g, '_') + file.originalname)
  }
})

function upload (req, res, next) {
  const uploadFiles = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
    fileFilter: function (req, file, cb) {
      const extFile = path.extname(file.originalname)
      if (extFile !== '.jpg') {
        cb('jpg Only!', false)
      } else {
        cb(null, true)
      }
    }
  }).array('image', 2)

  uploadFiles(req, res, function (err) {
    if (err) {
      if (err == 'jpg Only!') {
        return helpers.response(res, null, 'processing has not been completed', 202, 'jpg Only')
      } else {
        return helpers.response(res, null, 'processing has not been completed', 202, 'File too large')
      }
    } else {
      next()
    }
  })
}

module.exports = {upload}

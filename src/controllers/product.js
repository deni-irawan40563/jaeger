const ProductsModels = require('../models/product')
const helpers = require('../helpers/helpers')

module.exports = {
  createData: (req, res) => {
    const {
      image,
      name,
      description
    } = req.body
    const data = {
      image,
      name,
      description,
      post : new Date()
    }
    if (req.files) {
      data.image = req.files.map((file) => {
        return process.env.BASE_URL + '/uploads/image/'+ file.filename
      }).join()
    }
    ProductsModels.createData(data)
      .then((result) => {
        helpers.response(res, null, result, 200, null)
      })
      .catch((err) => {
        console.log(new Error(err))
      })
  },
  getAllData: (req, res) => {
    ProductsModels.getAllData()
      .then((result) => {
        helpers.response(res, null, result, 200, null)
      })
      .catch((err) => {
        console.log(new Error(err))
      })
  },
  updateData: (req, res) => {
    const id = req.params.id
    const {
      image,
      name,
      description,
    } = req.body

    const data = {
      image,
      name,
      description,
      post : new Date()
    }

    if (req.files) {
      data.image = req.files.map((file) => {
        return process.env.BASE_URL + '/uploads/image/' + file.filename
      }).join()
    }

    ProductsModels.updateData(id, data)
      .then((result) => {
        helpers.response(res, null, result, 200, null)
      })
      .catch((err) => {
        console.log(new Error(err))
      })
  },
  deleteData: (req, res) => {
    const id = req.params.id
    ProductsModels.deleteData(id)
      .then((result) => {
        helpers.response(res, null, result, 200, null)
      })
      .catch((err) => {
        console.log(new Error(err))
      })
  }
}

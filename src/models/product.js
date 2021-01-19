const connection = require('../configs/db')

module.exports = {
  createData: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO products SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  getAllData: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM products', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  updateData: (id, data) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE products SET ? WHERE id = ?', [data, id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },
  deleteData: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM products WHERE id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}

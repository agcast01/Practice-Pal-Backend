const express = require('express')
const router = express.Router()

const { User } = require('../db/models')

router.get('/', (req, res) => {
  User.findAll()
    .then(res => JSON.stringify(res, null, 2))
    .then(json => res.send(json))
})
  

module.exports = router
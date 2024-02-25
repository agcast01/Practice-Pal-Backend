const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const { User } = require('../db/models')

router.get('/', (req, res) => {
  User.findAll()
    .then(res => JSON.stringify(res, null, 2))
    .then(json => res.send(json))
})

router.post('/', (req, res) => {
  const newUser = req.body;
  console.log(req.body);
  res.status(201).send('Success')
})
  

module.exports = router
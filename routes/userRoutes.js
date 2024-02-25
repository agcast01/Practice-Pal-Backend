const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const { User } = require('../db/models')

router.get('/', (req, res) => {
  console.log("beep")
  User.findAll()
    .then(res => JSON.stringify(res, null, 2))
    .then(json => res.send(json))
})

router.post('/', async (req, res) => {
  const newUser = req.body;
  newUser.createdAt = new Date();
  newUser.updatedAt = new Date();
  newUser.password = await bcrypt.hash(newUser.password, 10);
  await User.create(newUser);
  res.status(201).send('Success');
})
  

module.exports = router
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const { User } = require('../db/models')

router.get('/', (req, res) => {
  User.findAll()
    .then(res => JSON.stringify(res, null, 2))
    .then(json => res.send(json))
})

router.post('/signup', async (req, res) => {
  const newUser = req.body;
  newUser.createdAt = new Date();
  newUser.updatedAt = new Date();
  newUser.password = await bcrypt.hash(newUser.password, 10);
  await User.create(newUser);
  res.status(201).send('Success');
})

router.post('/login', async (req, res) => {
  const attempt = req.body;
  try {
    const user = await User.findOne({where: {email: attempt.email}});
    if (!user) throw new Error("No user matching that email and password combination.")
    const passwordValidation = await bcrypt.compare(attempt.password, user.password);
    if (!passwordValidation) throw new Error("No user matching that email and password combination.")
    res.send(user.email)
  } catch (e) {
    res.send(e.message)
    return
  }
  
})
  

module.exports = router
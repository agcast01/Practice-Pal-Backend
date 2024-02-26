const express = require('express')
const router = express.Router()

const { Session, User } = require("../db/models")

router.get('/', async (req, res) => {
  const sessions = Sessions.findAll()
  res.send(JSON.stringify(sessions))
})

router.post('/newSession', async (req, res) => {
  const {userId} = req.body;
  const data = await Session.create({userId});
  const user = await User.findByPk(userId)
  user.sessionIds.append(data)
  res.status(201).send(JSON.stringify(data.dataValues));
})

module.exports = router
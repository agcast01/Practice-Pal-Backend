const express = require('express')
const router = express.Router()

const { Session, User } = require("../db/models")

router.get('/', async (req, res) => {
  const sessions = Sessions.findAll()
  res.send(JSON.stringify(sessions))
})

router.post('/newSession', async (req, res) => {
  const {userId, title} = req.body;
  const session = await Session.create({userId, title});
  const user = await session.getUser()
  console.log("Associated User: ", user.dataValues)
  res.status(201).send(JSON.stringify(session.dataValues));
})

module.exports = router
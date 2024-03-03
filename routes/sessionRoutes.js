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

router.put('/:sessionId/edit', async (req, res) => {
  const {sessionId} = req.params;
  const {title} = req.body;
  const session = await Session.findByPk(Number(sessionId));
  session.title = title;
  await session.save()
  res.send(session.dataValues);
})

router.delete('/:sessionId/delete', async (req, res) => {
  const {sessionId} = req.params;
  const session = await Session.findByPk(Number(sessionId));
  session.destroy();
  res.send("Successfully deleted session")
})

module.exports = router
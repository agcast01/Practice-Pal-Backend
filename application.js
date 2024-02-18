const express = require('express');
const { Sequelize } = require("sequelize");

const { User, db } = require('./db/models')

const app = express();
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/database.sqlite'
})


async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  const users = await User.findAll()
  let userList = JSON.stringify(users, null, 2)
  return userList
}

app.get('/', (req, res) => {
  const users = testConnection().then(user => {res.send(user)});
});
app.listen(3000);
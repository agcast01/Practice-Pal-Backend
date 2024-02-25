const express = require('express');
const { Sequelize } = require("sequelize");

const users = require('./routes/userRoutes')
const { User, db } = require('./db/models')

const app = express();
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/database.sqlite'
})

app.use(express.json())


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
  res.send('Hello World');
});

app.use('/users', users)
app.listen(3000);
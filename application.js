const express = require('express');
const { Sequelize } = require("sequelize");

const {User, db} = require('./db/models')

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
  console.log(users)
}

app.get('/', (req, res) => {
  testConnection();
  res.send('hello world');
});
app.listen(3000);
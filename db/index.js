const Sequelize = require('sequelize');
const keys = require('../config.js');

const db = new Sequelize(keys.SQLURL);

db.authenticate()

  .then(() => {
    console.log('Connected to database: FoodThoughts');
  })
  .catch((err) => {
    console.log('Error connecting to database: FoodThoughts - ', err);
  })

module.exports = db;
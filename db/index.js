const Sequelize = require('sequelize');
const keys = require('../config.js');


db.authenticate()

  .then(() => {
    console.log('Connected to database: FoodThoughts');
  })
  .catch((err) => {
    console.log('Error connecting to database: FoodThoughts - ', err);
  })

module.exports = db;
const db = new Sequelize(process.env.ELEPHANTSQL_URL);
const Sequelize = require('sequelize');
<<<<<<< HEAD
const db = new Sequelize('FoodThoughts', 'root', '', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  operatorsAliases: false
});
=======
const keys = require('../config.js');

const db = new Sequelize(keys.SQLURL);
>>>>>>> master

db.authenticate()

  .then(() => {
    console.log('Connected to database: FoodThoughts');
  })
  .catch((err) => {
    console.log('Error connecting to database: FoodThoughts - ', err);
  })

module.exports = db;
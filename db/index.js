const Sequelize = require('sequelize');
const db = new Sequelize('FoodThoughts', 'root', '', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  operatorsAliases: false
});

db.authenticate()

  .then(() => {
    console.log('Connected to database: FoodThoughts');
  })
  .catch((err) => {
    console.log('Error connecting to database: FoodThoughts - ', err);
  })

module.exports = db;
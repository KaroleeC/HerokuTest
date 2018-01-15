const Sequelize = require('sequelize');
const db = require('../');

const Users = db.define('Users', {
    id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
    userid: {
      type: Sequelize.STRING
    },
    location: {
      type: Sequelize.STRING
    },
    Bio: {
      type: Sequelize.STRING
    }
});

module.exports = Users;
const Sequelize = require('sequelize');
const db = require('../');

const Users = db.define('Users', {
    userid: {
      type: Sequelize.STRING
    },
    username: {
      type: Sequelize.STRING
    }
});

module.exports = Users;
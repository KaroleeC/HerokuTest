const Sequelize = require('sequelize');
const db = require('../');

const Reviews = db.define('Reviews', {
  rating: {
    type: Sequelize.DECIMAL(3, 2)
  },
  restaurantid: {
    type: Sequelize.STRING
  },
  userid: {
    type: Sequelize.STRING
  },
  userimage: {
    type: Sequelize.STRING
  },
  username: {
    type: Sequelize.STRING
  },
  comment: {
    type: Sequelize.STRING
  }
});

module.exports = Reviews;
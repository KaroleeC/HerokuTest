const Sequelize = require('sequelize');
const db = require('../');

const Reviews = db.define('Reviews', {
  rating: {
    type: Sequelize.DECIMAL(3, 2)
  },
<<<<<<< HEAD
  // comments: {
  //   type: Sequelize.STRING
  // },
  restaurantid: {
||||||| merged common ancestors
  userid: {
    type: Sequelize.STRING
  },
  restaurantid: {
=======
  restaurantid: {
    type: Sequelize.STRING
  },
  userid: {
    type: Sequelize.STRING
  },
  userimage: {
>>>>>>> styling
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
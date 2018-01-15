const Users = require('./users');
const Restaurants = require('./restaurants');
const Reviews = require('./reviews');

// Users.hasMany(Reviews);
// Restaurants.hasMany(Reviews);
Reviews.belongsTo(Users);
// Reviews.belongsTo(Restaurants);

Users.sync()
  .then(() => {
    console.log('Connected Users table');
  })
  .catch((err) => {
    console.log('Error connecting Users table: ', err);
  });

// Restaurants.sync()
//   .then(() => {
//     console.log('Connected Restaurants table');
//   })
//   .catch((err) => {
//     console.log('Error connecting Restaurants table: ', err);
//   });

Reviews.sync()
  .then(() => {
    console.log('Connected Reviews table');
  })
  .catch((err) => {
    console.log('Error connecting Reviews table: ', err);
  });

module.exports = { Users, Restaurants, Reviews };
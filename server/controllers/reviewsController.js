const Reviews = require('../../db/models/reviews');

const reviewsController = {
  CreateReview: (req, res) => {
    console.log('createReview, this is the req.body', req.body)
      Reviews.create({
        rating: req.body.rating,
        restaurantid: req.body.restaurantid,
        UserId: req.body.userid, 
      })
      .then(() => {
        Reviews.findAll({
          where: {
            RestaurantId: req.body.id
          }
        })
        .then(data => {
          res.status(201).send(data);
        });
      })
      .catch(err => { console.log('***ERROR***:', err);});
  },
  GetUserReview: (req, res) => {
    // console.log('here is the userid!!!!!', req.query.userid)
    Reviews.findAll({ where:{ userid: req.query.userid } })
    .then(data => {
      res.status(201).send(data)})
    .catch(err => { console.log('***ERROR***');});
  },
  getRestaurantReviews: (req, res)=> {
    console.log('inside of getRestaurantReviews. this is the req.query', req.query)
    Reviews.findAll({
      where:{
        restaurantId: req.query.restaurantid
      }
    })
    .then(data => {
      // console.log('inside of getRestaurantReviews here is all the data query from database ====>>>>>', data)
      res.status(201).send(data);
    })
  }
}

module.exports = reviewsController;
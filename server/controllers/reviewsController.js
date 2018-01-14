const Reviews = require('../../db/models/reviews');

const reviewsController = {
  CreateReview: (req, res) => {
      Reviews.create({
        rating: req.body.rating,
        userid: req.body.user, 
        restaurantid: req.body.restaurant
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
    Reviews.findAll({ where:{ userid: req.query.userid } })
    .then(data => {
      res.status(201).send(data)})
    .catch(err => { console.log('***ERROR***');});
  },
  getRestaurantReviews: (req, res)=> {
    Reviews.findAll({
      where:{
        restaurantId: req.query.ID
      }
    })
    .then(data => {
      console.log('inside of getRestaurantReviews here is all the data query from database ====>>>>>', data)
      res.status(201).send([{restaurantid:1, comments:'good restaurant!!!!!!', rating:5, userid:'shayne'}])
    })
  }
}

module.exports = reviewsController;
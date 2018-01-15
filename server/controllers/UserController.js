const  User = require('../../db/models/users');
const reviews = require('../../db/models/reviews')

const UserController = {
    CreateUser: (req, res) => {
        User.create(User.create({}))
    },
    getUserInfo: (req, res)=> {
    //   console.log('inside of getUserInfo here is the req.query.userid', req.query);
      User.findAll({where:{ userid: req.query.userid }})
          .then(result => {
            //   console.log('here is the result!!!!!', result);
              if(!result.length) {
                User.create({ userid: req.query.userid, location: req.query.location, bio: req.query.bio })
                    .then(()=> {res.send({userid: req.query.userid, location: 'usa', bio:'wode wode wode', reviews: 'sm wnyi'})})
              }else{
                  reviews.findAll({where: {userid: req.query.userid}})
                    .then(response => {
                        res.send({result: result, response: response});
                    })
                    .catch(err => { console.log('error when getting users information and reviews', err)})
                // res.send(result);
              }
          })
    },
    upDateUserInfo: (req, res)=> {
        // console.log('inside of updateuserinfo here is the req.body!!!!!!!!!!!!', req.body)
        User.update({location: req.body.location, Bio: req.body.bio}, {where : {userid: req.body.userid}})
            .then(response => {
                // console.log('i think is succrssflly updated', response);
                res.send(response);
                // res.redirect('user');
            })
            .catch(err=> {
                console.log('here is the err getting back', err)
            })
    }
}

module.exports = UserController;
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectOption } from '../actions/index';
import axios from 'axios';
import { initReviews } from '../actions/initReviews';

class Restaurant extends Component {
  
  componentWillMount() {
    // console.log('just did a get request this is the this.,props.userLoad[0].id', this.props.userLoad[0])
    setTimeout(() => {
      console.log('this is the this.props.ative_restaruant', this.props.active_restaurant)
      axios.get('/api/restaurant',  {
        params: {
          restaurantid: this.props.active_restaurant.id
        }
      })
        .then((response) => {
          console.log('These are this restaurants reviews: ', response.data);
         this.props.initReviews(response.data)
          
        })
        .catch((err) => {
          console.log('Failed to fetch restaurant reviews: ', err);
        });  
    }, 50); 
  }

  render() {
    console.log("this is the active restaurant ", this.props.active_restaurant )
    return (
      !this.props.active_restaurant ? null :
      <div>
        {/* Restaurant name and image */}
        <div>
          <div style={{marginTop: '20px'}} >
            <h2 className="text-center" style={{fontFamily: 'Monserrat, sans-serif'}} >{this.props.active_restaurant.name}</h2>
          </div>
          <hr/>
          <img className="img-fluid rounded" style={{maxWidth: '60%', margin: '30px 20%'}}  src={this.props.active_restaurant.image_url}/>
        </div>
        {/* Restaurant info */}
        <div className="offset-sm-2 col-sm-8 offset-sm-2 text-muted">
          <hr/>
          <h4 className="text-center" style={{fontFamily: 'Monserrat, sans-serif'}} >{this.props.active_restaurant.location.display_address.join(',  ')}</h4>
          <h4 className="text-center" style={{fontFamily: 'Monserrat, sans-serif'}} >{this.props.active_restaurant.display_phone}</h4>
          <hr/>
        </div>
        {/* Restaurant reviews */}
        <div className="offset-sm-3 col-sm-6 offset-sm-3" style={{marginTop: '25px'}} >
          <div>
            <button className="offset-sm-4 col-sm-4 offset-sm-4 btn btn-outline-dark" style={{fontFamily: 'Monserrat, sans-serif'}} onClick={(e) => 
            {
              e.preventDefault()
              this.props.selectOption('review');
            }
            }> Add Review</button>
          </div>
          <div style={{marginTop: '15px'}}> 
             <ul className="list-group">
              { 
                this.props.reviews.map(review => {
                  return <li>
                  <div>
                  <img src = {review.userimage}/>
            
                  </div>
                  <div>
                  {review.username}
                  </div>
                  <div>
                  {review.rating}
                  {review.comment}
                  </div>
                </li>
                })
              }
            </ul> 
          </div>
        </div>
        {/* Footer */}
        <footer className="footer row col-sm-12" style={{paddingTop:'5%'}}>
          <div className="container">
            <hr/>
            <p className="text-muted text-right">
              FoodThoughts 2018 &copy;
            </p>
          </div>
        </footer>
     </div>
    )
  }
}

function mapStateToProps(state) {
  
  return {
    active_restaurant: state.active_restaurant,
    userLoad: state.userLoad,
    reviews: state.reviews
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({selectOption: selectOption,
                            initReviews: initReviews
  
  }, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(Restaurant)
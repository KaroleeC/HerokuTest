import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectOption } from '../actions/index';
import axios from 'axios';

class Restaurant extends Component {
  constructor() {
    super();
    this.state = {
      restaurants : []
    }
  }

  componentWillMount() {
    setTimeout(() => {
      axios.get('/api/restaurant',  {
        params: {
          restaurantid: this.props.active_restaurant.id
        }
      })
        .then((data) => {
          console.log('These are this restaurants reviews: ', data);
          this.setState({
            restaurants: data.data
          });
          console.log('This is resReviews', this.state.restaurants);
        })
        .catch((err) => {
          console.log('Failed to fetch restaurant reviews: ', err);
        });  
    }, 50); 
  }

  render() {
   if(!this.props.active_restaurant){
    return (<div>pick restuarant</div>)
  
  }
    return (
      <div>
        {/* Restaurant name and image */}
        <div>
          <div style={{marginTop: '20px'}} >
            <h2 className="text-center">{this.props.active_restaurant.name}</h2>
          </div>
          <hr/>
          <img className="img-fluid rounded" style={{maxWidth: '60%', margin: '30px 20%'}}  src={this.props.active_restaurant.image_url}/>
        </div>
        {/* Restaurant info */}
        <div className="offset-sm-2 col-sm-8 offset-sm-2 text-muted">
          <hr/>
          <h4 className="text-center" >{this.props.active_restaurant.location.display_address.join(',  ')}</h4>
          <h4 className="text-center" >{this.props.active_restaurant.phone}</h4>
          <hr/>
        </div>
        {/* Restaurant reviews */}
        <div className="offset-sm-3 col-sm-6 offset-sm-3" style={{marginTop: '25px'}} >
          <div>
            <button className="offset-sm-5 col-sm-2 offset-sm-5 btn btn-outline-dark" onClick={(e) => 
            {
              e.preventDefault()
              this.props.selectOption('review');
            }
            }> Add Review</button>
          </div>
          <div style={{marginTop: '15px'}}> 
            <ul className="list-group">
              { 
                this.state.restaurants.map(item => {
                  return <li key={item.userid}className="list-group-item">{item.userid}: <p>{item.comments}</p></li>
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
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({selectOption: selectOption}, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(Restaurant)
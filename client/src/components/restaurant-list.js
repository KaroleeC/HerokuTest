import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectRestaurant } from '../actions/index'; 
import axios from 'axios'
import { selectOption } from '../actions/index';
//import style from '../../public/style.css'


class List extends Component{
    handleRestaurantClick (restaurant) {
        axios.get('./api/restaurant', {
            params: {
              ID: restaurant.id
            }
          })
        .then((response) => {
          console.log('here is the response', response.data)
          this.props.selectRestaurant(restaurant, response.data)
        })
        .catch((err) => {
          console.log('error from list axios', err)
        })
    }
    renderListItem() {
      console.log(this.props.restuarants)
      
      return (
        <div className="card-columns" style={{marginTop: '25px', marginRight: '4%'}} >
        {this.props.restaurants.map((restaurant) => {
          return (
            <div className="card"
            key={restaurant.id}
            onClick={(e) => {
              e.preventDefault()
              this.handleRestaurantClick(restaurant)
              this.props.selectOption('restaurant')
            }}
            >
              <div className="ListEntryImage">
                { <img className="img-thumbnail card-img-top" width="30%" height="30%" src={restaurant.image_url} /> }
              </div>
              <div className="card-body">
                <div className="card-title text-center" style={{fontFamily: 'Raleway'}}>{restaurant.name} </div>
                <div className="text-muted text-center" style={{fontFamily: 'Raleway'}}>{restaurant.location.display_address.join(', ')}</div> 
              </div>
            </div>
          )
        })
      }
      </div>
    )
    }

    render() {
       return ( !this.props.restaurants
        ?
             null
        
       :
            <ul>
                {this.renderListItem()}
            </ul>)
        
    
    }
}

//mapStateToProps is the contain for this component
//takes a piece of state and adds to props
function mapStateToProps(state) {
  return {restaurants: state.restaurants} 
};

function matchDispatchToProps(dispatch) {
  return bindActionCreators({selectRestaurant: selectRestaurant,
                             selectOption: selectOption
                    }, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(List);
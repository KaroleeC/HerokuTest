//layout for app
import React from 'react';
import User from './userdisplay';
import Review from './DisplayReviews';
import Login from './login';
import Search from './search';
import Restaurants from './restaurant-list';
import Restaurant from './restaurant';
import ReviewForm from './ReviewForm';
import firebase from '../firebase';
import { activeUser } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';
import Option from './option';


class App extends React.Component {
  componentWillMount () {
    firebase.auth.onAuthStateChanged(user=> {
      if (user) {
        this.props.activeUser(user);
      } else {
        return (
          <div>
            <Login />
          </div>
        )
      }
    })
  }
  
  render() {
    if (this.props.active_user) {
      return (
        <div>
          <Search />
          <Option />
        </div>
      )
    } else {
      return (
        <div>
          <Login />
        </div>
      )
    }
  }
}
function mapStateToProps(state) {
  return {
    active_user: state.active_user,
  }
};

function matchDispatchToProps (dispatch){
  return bindActionCreators({activeUser : activeUser }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(App)

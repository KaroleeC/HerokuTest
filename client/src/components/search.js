import React from 'react'
import { searchRestaurant } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios'
import { selectOption } from '../actions/index';
import Login from './login';
import base from '../firebase.js';

class Search extends React.Component { 
  search () {
    let inputValue =  document.getElementById('input').value.split(',');
    inputValue[0] = 'term=' + inputValue[0];
    inputValue[1] = 'location=' + inputValue[1];
    axios.post('/api/search', {query: inputValue})
      .then((response)=>{
        console.log('fetching?', response)
          this.props.searchRestaurant(response.data);
      })
      .catch((err) => {
        console.log('inside of catch', err)
      })

  }
  render() {
    if(this.props.active_user) {
      return (
        <nav className="navbar navbar-light bg-light justify-content-between" >
          <a className="navbar-brand" href=""
            onClick={(e)=>this.props.selectOption('user')}
          >FoodThoughts</a>
          <form className="form-inline">
            <div style={{marginRight: '7px'}} >
              <input className="form-control mr-sm-2"  type='text' id='input' placeholder="Search" />
              <button className="btn btn-outline-primary my-2 my-sm-0" onClick={(e) => {
                e.preventDefault()
                this.search()
                this.props.selectOption('list')
                }}
                >Submit</button>
            </div>
            <button className="btn btn-outline-danger" onClick={base.logout}>Logout</button>
          </form>
        </nav>
      )
    } else {
      return(
      <div>
        <Login />
      </div>
      )
    }
  }
}
function mapStateToProps(state) {
    // return {restaurants: state.haha} 
  return { 
    active_user: state.active_user,
    restaurants: state.restaurants       
  }
};

function matchDispatchToProps (dispatch){
  return bindActionCreators({
    searchRestaurant: searchRestaurant,
    selectOption: selectOption
  }, 
  dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Search)


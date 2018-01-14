import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Review from './DisplayReviews';
import List from './restaurant-list';
import { toggleBio } from '../actions/toggleBio';
import { changeBio } from '../actions/changeBio';
import { changeLocal } from '../actions/changeLocal';
import { initReviews } from '../actions/initReviews';
//need a location finder for user location

class User extends Component {
  constructor(props) {
    super(props)

    this.renderCondition = this.renderCondition.bind(this);
    this.BioDisplay = this.BioDisplay.bind(this);
    this.BioChangehandler = this.BioChangehandler.bind(this);
    this.LocationChangehandler = this.LocationChangehandler.bind(this);
  }
  
  componentDidMount() {
    axios.get(`/api/reviews?userid=${this.props.user.id}`).then( res => {
      //set state with data
      this.props.initReviews(res.data);
    })
    .catch(err => { 
      console.log('axois get request err (userdisplay.js)', err); } );
  }

  renderCondition() {
    //search db for reviews associated with this user id
    if( this.props.reviews.length <= 0 ){
        //if no reviews
      return (
        <div> Looks like you have no food thoughts. <br/> Search for a restaurant to submit your thoughts... </div> 
      )
    } else {
      //if they have reviews
      return (
        <div >
          Comments
          <Review username={this.props.user.name}/>
        </div>
      )
    }
  }

  BioDisplay() {
    //display either bio edit or bio depending on state 
    if(this.props.editBio.value) {
      //display edit box prepopulated with previous bio
      return (
        <div className="card-text" > 
          <p className="text-muted" ><input type="text" ref="localText" defaultValue={this.props.user.location} onChange={ () => {this.LocationChangehandler()} } /> </p>
          <textarea defaultValue={this.props.user.bio} onChange={ () => {this.BioChangehandler()} } ref="bioText" ></textarea> 
        </div>
      ) 
    } 
    else {
      return (
        <div>
          <p className="text-muted" > {this.props.user.location} </p>
          <p> {this.props.user.bio} </p>
        </div> 
      )   
    }
  }

  BioChangehandler() {
    //saves changes to biotext area
    this.props.changeBio(this.refs.bioText.value)
  }

  LocationChangehandler() {
    //saves changes to location text input
    this.props.changeLocal(this.refs.localText.value)
  }

  render() {
    if(!this.props.active_user) {
      return (
        <div>
          <h2>please log in to see the user page!!</h2>
        </div>
      )
    }
    return (
      <div className="container">
        <div className="text-center" style={{paddingTop: '2%', paddingBottom: '1%'}} >
          <h2>{this.props.active_user.displayName}</h2>
          <hr/>
        </div>
        <div className="container">
          <div className="card col-sm-6 float-left">
            <div>
              <img className="card-img-top img-fluid rounded" style={{paddingTop: '3%'}} src={this.props.active_user.photoURL}/>
            </div>
            <div className="card-body">
            <h4 className="card-title" > Bio </h4>
              { this.BioDisplay() }
              <button className="btn btn-outline-dark" onClick={ () => { this.props.toggleBio() }} >Edit Bio</button>
              {/* <p>You are located at: {this.props.user.location} </p>  */}
            </div>
          </div>
          <div className="col-sm-6 float-right">
            <div className="text-center">
              <h4>Reviews</h4>
              {this.renderCondition()}
            </div>
          </div>
        </div>
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

//mapStateToProps is the contain for this component
//takes a piece of state and adds to props
function mapStateToProps(state) {
  return {
    user: state.user,
    editBio: state.editBio,
    reviews: state.reviews,
    active_user: state.active_user
  } 
};

//connect action creater to component/state
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    toggleBio: toggleBio,
    changeBio: changeBio,
    changeLocal: changeLocal,
    initReviews: initReviews
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(User);
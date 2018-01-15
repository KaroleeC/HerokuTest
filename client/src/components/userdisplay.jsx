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
import { userInfo } from '../../src/actions/userInfo';
import { selectOption } from '../actions/index'
//need a location finder for user location

class User extends Component {
  constructor(props) {
    super(props)

    this.renderCondition = this.renderCondition.bind(this);
    this.BioDisplay = this.BioDisplay.bind(this);
    this.BioChangehandler = this.BioChangehandler.bind(this);
    this.LocationChangehandler = this.LocationChangehandler.bind(this);
    this.beforeToggleBio = this.beforeToggleBio.bind(this);
    this.getData = this.getData.bind(this);
  }
  
  componentWillMount() {
    this.getData();
   
  }
  getData() {
    axios.get(`/api/user?userid=${this.props.active_user.uid}`).then( res => {
      //set state with data
      console.log('inside of componentwillpoent, this is the res', res)
      this.props.userInfo(res.data);
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
          <Review username={this.props.active_user.displayName}/>
        </div>
      )
    }
  }

  BioDisplay() {
    console.log('inside of BioDisplay this is this.props.userLoad', this.props.userLoad)
    //display either bio edit or bio depending on state 
    if(this.props.editBio.value) {
      //display edit box prepopulated with previous bio
      return (
        <div className="card-text" > 
          <p>LOCATION:  </p><p className="text-muted" ><input type="text" ref="localText" id='location' defaultValue={this.props.userLoad[0].location} onChange={ () => {this.LocationChangehandler()} } /> </p>
          <p>BIO:  </p>
          <textarea id='bio' defaultValue={this.props.userLoad[0].Bio} onChange={ () => {this.BioChangehandler()} } ref="bioText" ></textarea> 
        </div>
      ) 
    } 
    else {
      if(this.props.userLoad) {
      return (
        <div>
          <p  id="location1" className="text-muted" >LOCATION:  {this.props.userLoad[0].location} </p>
          <p id='bio1'>BIO: {this.props.userLoad[0].Bio} </p>
        </div> 
      )  }else{
        <div>
          what!!
          </div>
      } 
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
  beforeToggleBio() {
    if(this.props.editBio.value){
      let location = document.getElementById('location').value;
      let bio = document.getElementById('bio').value;
      // let bio = this.refs.bioText
      // console.log('bbbbbbbeforeToggleBio this is the location and bio', location, bio)
      axios.post('api/user', {userid: this.props.active_user.uid, location: location, bio: bio})
        .then(response => {
          if(response){
            this.getData();
          }else{
          
          }
        })
        .catch(err => {
          console.log('getting err after submit bio', err)
    
        })
  this.props.toggleBio()
    }else{
      this.props.toggleBio()
    }
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
              <button className="btn btn-outline-dark" onClick={ () => { this.beforeToggleBio() }} >Edit Bio</button>
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
    active_user: state.active_user,
    userLoad: state.userLoad,
    option: state.option
  } 
};

//connect action creater to component/state
function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    toggleBio: toggleBio,
    changeBio: changeBio,
    changeLocal: changeLocal,
    initReviews: initReviews,
    userInfo: userInfo,
    selectOption: selectOption
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(User);
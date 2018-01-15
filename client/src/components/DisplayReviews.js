import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Review extends Component{

    constructor(props){
        super(props);

        this.renderusercomments = this.renderusercomments.bind(this)
    }



    //function to get specific id 
 renderusercomments() {
    //
    console.log('inside of renderusercomments this is the this.prop.userReviews', this.props.userReviews)
    if(!this.props.active_restaurant ) {
        return(
            <p>no active restaurant detected</p>
        )
    }
    else{
     return this.props.userReviews
     .map( (review) => {

        return(
        <div key={review.restaurantid} id="comments">
            <p > user: {review.username}, score: {review.rating} </p>
            <p>comment: {review.comment}</p>
            
            <p>  {review.text} </p>
        </div>
        
        )
        
    } 
    )
    }
 }


    render() {
        return(
            <div className='reviews'>
                {/* {this.props.username} */}
                {this.renderusercomments()}    

            </div>
        )
}

}

//mapStateToProps is the contain for this component
//takes a piece of state and adds to props
function mapStateToProps(state) {
  return {
      active_restaurant: state.active_restaurant,
      userReviews: state.userReviews

} 
};

export default connect(mapStateToProps)(Review);
import React from 'react';
import axios from 'axios';
import { selectOption } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ReviewForm extends React.Component {
  constructor() {
    super();

    // Hold radio values
    this.form = {
      food: null,
      service: null,
      atmosphere: null,
      cleanliness: null
    }

    this.onSelect = this.onSelect.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onSelect(e) {
    // Set radio values inside form object
    this.form[e.target.name] = parseInt(e.target.value);
  }

  onSubmitHandler () {
    const average = (this.form.food + this.form.service + this.form.atmosphere + this.form.cleanliness) / 4;

    console.log(average);
    console.log('muthafuckin uid', this.props.active_user.uid)

    const payload = {
      restaurant: this.props.active_restaurant.id,
      rating: average,
      user: this.props.active_user.uid
    };

    axios.post('/api/reviews', payload)
      .then((data) => {
        console.log('Sent data: ', data);
      })
      .catch((err) => {
        console.log('Failed to create review: ', err);
      });
  }

  render() {
    return (
      <div className="container">
        <h1>Review Form</h1>
        <form onChange={this.onSelect} name="food">
          <p>How would you rate the food?</p>
          <div className="form-check form-check-inline" >
            <input className="form-check-input" type="radio" name="food" id="one" value={1} />
            <label className="form-check-label" htmlFor="one">1</label>
          </div>
          <div className="form-check form-check-inline" >
            <input className="form-check-input" type="radio" name="food" id="two" value="2" />
            <label className="form-check-label" htmlFor="two">2</label>
          </div>
          <div className="form-check form-check-inline" >
            <input className="form-check-input" type="radio" name="food" id="three" value="3" />
            <label className="form-check-label" htmlFor="three">3</label>
          </div>
          <div className="form-check form-check-inline" >
            <input className="form-check-input" type="radio" name="food" id="four" value="4" />
            <label className="form-check-label" htmlFor="four">4</label>
          </div>
          <div className="form-check form-check-inline" >
            <input className="form-check-input" type="radio" name="food" id="five" value="5" />
            <label className="form-check-label" htmlFor="five">5</label>
          </div>

          <p>How would you rate the service?</p>
          <div className="form-check form-check-inline" >
            <input className="form-check-input" type="radio" name="service" id="one" value={1} />
            <label className="form-check-label" htmlFor="one">1</label>
          </div>
          <div className="form-check form-check-inline" >
            <input className="form-check-input" type="radio" name="service" id="two" value="2" />
            <label className="form-check-label" htmlFor="two">2</label>
          </div>
          <div className="form-check form-check-inline" >
            <input className="form-check-input" type="radio" name="service" id="three" value="3" />
            <label className="form-check-label" htmlFor="three">3</label>
          </div>
          <div className="form-check form-check-inline" >
            <input className="form-check-input" type="radio" name="service" id="four" value="4" />
            <label className="form-check-label" htmlFor="four">4</label>
          </div>
          <div className="form-check form-check-inline" >
            <input className="form-check-input" type="radio" name="service" id="five" value="5" />
            <label className="form-check-label" htmlFor="five">5</label>
          </div>

          <p>How would you rate the atmosphere?</p>
          <div className="form-check form-check-inline" >
            <input className="form-check-input" type="radio" name="atmosphere" id="one" value={1} />
            <label className="form-check-label" htmlFor="one">1</label>
          </div>
          <div className="form-check form-check-inline" >
            <input className="form-check-input" type="radio" name="atmosphere" id="two" value="2" />
            <label className="form-check-label" htmlFor="two">2</label>
          </div>
          <div className="form-check form-check-inline" >
            <input className="form-check-input" type="radio" name="atmosphere" id="three" value="3" />
            <label className="form-check-label" htmlFor="three">3</label>
          </div>
          <div className="form-check form-check-inline" >
            <input className="form-check-input" type="radio" name="atmosphere" id="four" value="4" />
            <label className="form-check-label" htmlFor="four">4</label>
          </div>
          <div className="form-check form-check-inline" >
            <input className="form-check-input" type="radio" name="atmosphere" id="five" value="5" />
            <label className="form-check-label" htmlFor="five">5</label>
          </div>

          <p>How would you rate the cleanliness?</p>
          <div className="form-check form-check-inline" >
            <input className="form-check-input" type="radio" name="cleanliness" id="one" value={1} />
            <label className="form-check-label" htmlFor="one">1</label>
          </div>
          <div className="form-check form-check-inline" >
            <input className="form-check-input" type="radio" name="cleanliness" id="two" value="2" />
            <label className="form-check-label" htmlFor="two">2</label>
          </div>
          <div className="form-check form-check-inline" >
            <input className="form-check-input" type="radio" name="cleanliness" id="three" value="3" />
            <label className="form-check-label" htmlFor="three">3</label>
          </div>
          <div className="form-check form-check-inline" >
            <input className="form-check-input" type="radio" name="cleanliness" id="four" value="4" />
            <label className="form-check-label" htmlFor="four">4</label>
          </div>
          <div className="form-check form-check-inline" >
            <input className="form-check-input" type="radio" name="cleanliness" id="five" value="5" />
            <label className="form-check-label" htmlFor="five">5</label>
          </div>

          <br/>

          <div>
            <button className="btn btn-primary" onClick={(e) => {
              e.preventDefault()
              this.onSubmitHandler()
              this.props.selectOption('restaurant');
            }}>
              Submit
            </button>  
          </div>
        </form>
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    active_restaurant: state.active_restaurant,
    active_user: state.active_user
  }
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    selectOption: selectOption
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ReviewForm);
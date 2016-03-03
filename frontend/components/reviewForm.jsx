var React = require('react');
var ApiUtils = require('../utils/utils.js');
var UserStore = require('../stores/userStore.js');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ReviewStore = require('../stores/reviewStore.js');



var ReviewForm = React.createClass({
  mixins: [LinkedStateMixin],

  blankAttrs: {
    rating: 0,
    review: ''
  },

  getInitialState: function () {
    return this.blankAttrs;
  },

  createReview: function (e) {
    e.preventDefault();
    var review = {};
    Object.keys(this.state).forEach(function (key) {
      { review[key] = this.state[key]; }
    }.bind(this))
    review["store_id"] = this.props.storeId;
    review["user_id"] = UserStore.currentUser().id;
    ApiUtils.createReview(review);
    this.reviewListener = ReviewStore.addListener(this._onReviewPosted);
  },

  _onReviewPosted: function () {
    if (ReviewStore.errors().length === 0) {
      this.setState(this.blankAttrs);
    } else {
      this.errors = ReviewStore.errors();
      this.forceUpdate();
    }

  },

  handleRadioChange: function(value, e) {
    this.setState({
      rating: value,
    });
 },
  renderErrors: function () {
    if (this.errors !== undefined){
      reactErrors = this.errors.map(function(error){
        return (
          <div className="error-indv">
            {error}
          </div>
        )
      });
      ReviewStore.errorsReceived();
      this.errors = undefined;
      return <div className="error-warning">{reactErrors}</div>;
    } else {
      return <div className="error-warning"></div>;
    }

  },

  render: function () {
    return(
      <form className='new-review form-group'>
        <h4>Start Your Review...</h4>
        {this.renderErrors()}
        <label htmlFor='review_rating'></label>
        <span className="star-cb-group">
          <input type="radio"
            name="rating"
            value={0}
            id="rating-0"
            checked={this.state.rating === 0}
            onChange={this.handleRadioChange.bind(this,0)}
            className="star-cb-clear"
          /><label htmlFor="rating-0">0</label>
          <input type="radio"
            name="rating"
            value={1}
            id="rating-1"
            checked={this.state.rating === 1}
            onChange={this.handleRadioChange.bind(this,1)}
          /><label htmlFor="rating-1">1</label>
          <input type="radio"
            name="rating"
            value={2}
            id="rating-2"
            checked={this.state.rating === 2}
            onChange={this.handleRadioChange.bind(this,2)}
          /><label htmlFor="rating-2">2</label>
          <input type="radio"
            name="rating"
            value={3}
            id="rating-3"
            checked={this.state.rating === 3}
            onChange={this.handleRadioChange.bind(this,3)}
          /><label htmlFor="rating-3">3</label>
          <input type="radio"
            name="rating"
            value={4}
            id="rating-4"
            checked={this.state.rating === 4}
            onChange={this.handleRadioChange.bind(this,4)}
          /><label htmlFor="rating-4">4</label>
          <input type="radio"
            name="rating"
            value={5}
            id="rating-5"
            checked={this.state.rating === 5}
            onChange={this.handleRadioChange.bind(this,5)}
          /><label htmlFor="rating-5">5</label>
        </span>

        <div>
          <label htmlFor='review_review'>Review:</label>
          <br></br>
          <textarea
            style={{width: 400, height: 50}}
            valueLink={this.linkState("review")}
          />
        </div>

        <button className="btn btn-default" onClick={this.createReview}>Submit Review</button>
        <br />
      </form>
    );
  }
});


module.exports = ReviewForm;

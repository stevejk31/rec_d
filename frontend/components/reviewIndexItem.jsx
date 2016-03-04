var React = require('react');
var ApiUtils = require('../utils/utils.js');
var UserStore = require('../stores/userStore.js');


var ReviewIndexItem = React.createClass({
  delete: function(e) {
    e.preventDefault();
    ApiUtils.deleteReview(this.props.review.id);
  },

  renderDelete: function() {
    if(UserStore.currentUser().username === this.props.review.user.username){
      return (
        <button className="btn btn-default" onClick={this.delete}>
          Delete
        </button>
    );
    } else {
      return "";
    }
  },
  render: function() {
    return (
      <li className="review-list-item list-group-item" role="presentation">
        <div className="review-username">
          <h4>{this.props.review.user.username}</h4>
        </div>
        <div className="review-rating">
          <span className=" rating" data-stars={this.props.review.rating.toString()+".0"}/>
        </div>
        <div className="review-review">{this.props.review.review}</div>
        {this.renderDelete()}

      </li>
    );
  }

});

module.exports = ReviewIndexItem;

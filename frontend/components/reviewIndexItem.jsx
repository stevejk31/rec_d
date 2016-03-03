var React = require('react');
var ApiUtils = require('../utils/utils.js');
var UserStore = require('../stores/userStore.js');


var ReviewIndexItem = React.createClass({
  delete: function(e) {
    e.preventDefault();
    ApiUtils.deleteReview(this.props.review.id);
  },

  edit: function() {

  },

  renderDelete: function() {
    if(UserStore.currentUser().username === this.props.review.user.username){
      return <button className="btn btn-default" onClick={this.delete}>Delete</button>;
    } else {
      return "";
    }
  },
  render: function() {
    return (
      <li className="review-list-item list-group-item" role="presentation">
        <div className="review-username">Username:{this.props.review.user.username}</div>
        <div className="review-rating">Rating:{this.props.review.rating}</div>
        <div className="review-review">Review:{this.props.review.review}</div>
        {this.renderDelete()}

      </li>
    );
  }

});

module.exports = ReviewIndexItem;

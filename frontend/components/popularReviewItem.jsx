var React = require('react');
var ApiUtils = require('../utils/utils.js');
var UserStore = require('../stores/userStore.js');
var History = require('react-router').History;


var PopularReviewItem = React.createClass({
  mixins: [History],

  showDetail: function (e) {
    e.preventDefault();
    this.history.pushState(null, '/store/' + this.props.review.store.id, {});
    window.scrollTo(0, 0);
  },

  render: function() {
    return (
      <li className="popular-review-list-item list-group-item"
        role="presentation"
        >
        <div className="review-username">
          <h4>
            <b>{this.props.review.user.username}</b>
            {" wrote a review for "}
            <a href="#" onClick={this.showDetail} className="review-store-name">
              {this.props.review.store.name}
            </a>
          </h4>
        </div>
        <div className="popular-review-rating">
          <span className=" rating" data-stars={this.props.review.rating}/>
        </div>
        <div className="popular-review-review">{this.props.review.review}</div>

      </li>
    );
  }

});

module.exports = PopularReviewItem;

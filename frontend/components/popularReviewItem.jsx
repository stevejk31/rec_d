var React = require('react');
var ApiUtils = require('../utils/utils.js');
var History = require('react-router').History;


var PopularReviewItem = React.createClass({
  mixins: [History],
  getInitialState: function() {
    return {reviewLength: 200};
  },

  showDetail: function (e) {
    e.preventDefault();
    this.history.pushState(null, '/store/' + this.props.review.store.id, {});
    window.scrollTo(0, 0);
  },

  handleReview: function(e) {

    e.preventDefault();
    if (this.state.reviewLength < this.props.review.review.length) {
      this.setState({reviewLength: this.props.review.review.length});
    } else {
      this.setState({reviewLength: 200});
    }
  },

  renderReview: function () {
    outputReview = [this.props.review.review];
    if (this.props.review.review.length > this.state.reviewLength) {
      outputReview = [this.props.review.review.slice(0,this.state.reviewLength)];
      outputReview.push(<a onClick={this.handleReview} href="#">... see more</a>);
    }
    return outputReview;
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
          <span className=" rating" data-stars={this.props.review.rating.toString()+".0"}/>
        </div>
        <div
          className="popular-review-review">
          {this.renderReview()}
        </div>

      </li>
    );
  }

});

module.exports = PopularReviewItem;

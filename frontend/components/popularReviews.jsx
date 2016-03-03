var React = require('react');
var ReviewStore = require('../stores/reviewStore.js');
var ApiUtils = require('../utils/utils.js');
var PopularReviewItem = require('../components/popularReviewItem.jsx');


var PopularReviews = React.createClass({
  getInitialState: function() {
    return ({
      reviews: {},
    });
  },

  componentDidMount: function() {
    this.reviewListener = ReviewStore.addListener(this._onChange);
    ApiUtils.popularReviews();
  },

  componentWillUnmount: function() {
    this.reviewListener.remove();
  },


  _onChange: function() {
    this.setState({
      reviews: ReviewStore.all()
    });
  },

  renderReviews: function() {
    var _renderReviews;

    if (this.state.reviews === {}) {
      _renderReviews = ["loading..."];
    } else {
      _renderReviews = Object.keys(this.state.reviews).map(function(idx){
        return (
          <PopularReviewItem key={idx} review={this.state.reviews[idx]} />
        );
      }.bind(this));
    }

    return _renderReviews.reverse();
  },


  render: function() {

    return (
      <div className="container-fluid">
        <ul className="popular-review-list nav nav-pills nav-stacked">
          {this.renderReviews()}
        </ul>
      </div>
    );
  }

});

module.exports = PopularReviews;

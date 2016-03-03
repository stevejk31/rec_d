var React = require('react');
var ReviewStore = require('../stores/reviewStore.js');
var ApiUtils = require('../utils/utils.js');
var ReviewIndexItem = require('../components/reviewIndexItem.jsx')


var PopularReviews = React.createClass({
  getInitialState: function() {
    return ({
      reviews: ReviewStore.all(),
    });
  },

  componentDidMount: function() {
    this.reviewListener = ReviewStore.addListener(this._onChange);
    ApiUtils.popularReviews();
  },

  componentWillUnmount: function() {
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
          <ReviewIndexItem key={idx} review={this.state.reviews[idx]} />
        )
      }.bind(this))
    }

    return _renderReviews.reverse();
  },


  render: function() {

    return (
      <div className="container-fluid">
        <ul className="reviews-list nav nav-pills nav-stacked">
          {this.renderReviews()}
        </ul>
      </div>
    );
  }

});

module.exports = PopularReviews;

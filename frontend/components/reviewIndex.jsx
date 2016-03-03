var React = require('react');
var ReviewStore = require('../stores/reviewStore.js');
var ApiUtils = require('../utils/utils.js');
var ReviewIndexItem = require('../components/reviewIndexItem.jsx')
var ReviewForm = require('../components/reviewForm.jsx');
var UserStore = require('../stores/userStore.js');


var ReviewIndex = React.createClass({
  getInitialState: function() {
    return ({
      reviews: ReviewStore.all(),
      currentUser: UserStore.currentUser()
    });
  },

  componentDidMount: function() {
    this.reviewListener = ReviewStore.addListener(this._onChange);
    this.userStoreListener = UserStore.addListener(this._onUserChange);
  },

  componentWillUnmount: function() {
    this.reviewListener.remove();
    this.userStoreListener.remove();
  },

  componenetDidUpdate: function (oldProps) {
    this._onChange();
  },

  _onUserChange: function() {
    this.setState({
      currentUser: UserStore.currentUser()
    });
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
  renderForm: function () {
    var renderForm = <ReviewForm storeId={this.props.storeId} />;
    if(this.state.currentUser.username ===  null){
      renderForm = "";
    }
    return renderForm;
  },

  render: function() {

    return (
      <div className="reviews-index container-fluid">
        <h3>Recommended Reviews</h3>
        {this.renderForm()}
        <ul className="reviews-index nav nav-pills nav-stacked">
          {this.renderReviews()}
        </ul>
      </div>
    );
  }

});

module.exports = ReviewIndex;

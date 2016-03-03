var React = require('react');
var PopularPosts = require('../components/popularPosts.jsx');
var PopularReviews = require('../components/popularReviews.jsx');
var History = require('react-router').History;

var Splash = React.createClass({
  mixins: [History],

  signUp: function(e) {
    e.preventDefault();
    window.location.replace("/signup");
    this.history.pushState({}, '/signup/', {});

  },

  render: function() {
    return (
      <div className="container-fluid">
        <div className="welcome-box-image">
          <div className="welcome-box">
            <h3>
              <font color="#F5D04C">
                {"Rec'd is the best way to find great coffee shops in San Fransisco"}
              </font>
            </h3>
            <br/>
            <font color="#ffffff">
            <div>{"People use Rec'd to search for new coffee places in the city by location or by name.\n "}</div>
            <div>{"What will you uncover in your neighborhood next?"}</div>
            </font>
            <br/>
              <button onClick={this.signUp} className="btn btn-default create-account">
                Create Your Free Account
              </button>
          </div>
        </div>
        <div id="splash-left">
          <h3>Popular Coffee Shops</h3>
          <PopularPosts/>
        </div>
        <div id="splash-right">
          <h3>Recent Reviews</h3>
          <PopularReviews/>
        </div>
      </div>
    );
  }

});

module.exports = Splash;

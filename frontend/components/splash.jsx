var React = require('react');
var PopularPosts = require('../components/popularPosts.jsx');
var PopularReviews = require('../components/popularReviews.jsx');

var Splash = React.createClass({

  render: function() {
    return (
      <div className="container-fluid">
        <h2>{"Rec'd is the best way to find great coffee shops in San Fransisco"}</h2>
        <div id="splash-left">
          <h3>Popular Coffee Shops</h3>
          <PopularPosts/>
        </div>
        <div id="splash-right">
          <h3>Popular Reviews</h3>
          <PopularReviews/>
        </div>
      </div>
    );
  }

});

module.exports = Splash;

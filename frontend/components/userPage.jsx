var React = require('react');
var PropTypes = React.PropTypes;
var UserStore = require('../stores/userStore.js');
var ApiUtils = require('../utils/utils.js');
var PopularPosts = require('../components/popularPosts.jsx');



var UserPage = React.createClass({
  getInitialState: function() {
    return {currentUser: UserStore.currentUser()};
  },

  componentDidMount: function() {
    this.storeListener = UserStore.addListener(this._onChange);
  },

  _onChange: function (argument) {
    this.setState({currentUser: UserStore.currentUser()});
  },

  render: function() {
    return (
      <div className="container-fluid" id="user-page">
        <div id="user-left">
        <img className="user-page-profilepicture"
          height="300px" width="400px"
          src="http://www.meghantelpner.com/wp-content/uploads/2014/09/shutterstock_111999368.jpg"
          />
        </div>
        <div id="user-right">
          <h2>{this.state.currentUser.username}</h2>
          <div className="user-page-description">
          </div>
        </div>
        <div id="user-bottom">
          <h3>Recommended Locations for {this.state.currentUser.username}</h3>
          <PopularPosts/>
        </div>
      </div>
    );
  }

});

module.exports = UserPage;

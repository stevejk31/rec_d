var React = require('react');
var PropTypes = React.PropTypes;
var UserStore = require('../stores/userStore.js');
var ApiUtils = require('../utils/utils.js');


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
      <div>
        <img className="user-page-profilepicture"
          height="300px" width="400px"
          src="http://www.meghantelpner.com/wp-content/uploads/2014/09/shutterstock_111999368.jpg"
          />
        <br/>
        <div className="user-page-username">
          {this.state.currentUser.username}
        </div>
        <div className="user-page-description">
          User Description
        </div>

      </div>
    );
  }

});

module.exports = UserPage;

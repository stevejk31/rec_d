var React = require('react');
var PopularPosts = require('../components/popularPosts.jsx');
var PopularReviews = require('../components/popularReviews.jsx');
var History = require('react-router').History;
var ApiUtils = require('../utils/utils.js');
var UserStore = require('../stores/userStore.js');

var Splash = React.createClass({
  mixins: [History],
  getInitialState: function() {
    return {currentUser: UserStore.currentUser()};
  },

  componentDidMount: function() {
    this.storeListener = UserStore.addListener(this._onChange);
    ApiUtils.fetchCurrentUser();
  },

  componentWillUnmount: function() {
    this.storeListener.remove();
  },

  signUp: function(e) {
    window.location.replace("/signup");
    this.history.pushState({}, '/signup/', {});
  },

  _onChange: function() {
    this.setState({currentUser: UserStore.currentUser()});
  },

  guestLogin: function () {
    ApiUtils.signInGuest();
  },

  welcomeBox: function () {
    if (this.state.currentUser.username ===  null) {
      return(
        <div className="welcome-box">
          <br/>
          <h3>
            <font color="#F5D04C">
              {"Rec'd is the best way to find great coffee shops in San Fransisco"}
            </font>
          </h3>
          <br/>
          <div>{"People use Rec'd to search for new coffee places in the city by location or by name.\n "}</div>
          <div>{"What will you uncover in your neighborhood next?"}</div>
          <br/>
          <button
            onClick={this.signUp}
            className="btn btn-default create-account"
            >
            Create Your Free Account
          </button>
          <br/>
          <br/>

          <div>
            {"Just want to check us out? "}
            <u onClick={this.guestLogin} className="guest-login"
              >
              Guest Login
            </u>
            <br/>
            <br/>

          </div>

        </div>
      );
    } else {
      return   (
        <div className="welcome-box">
          <br/>
          <br/>
          <h2>
            <font color="#F5D04C">
              Welcome Back {this.state.currentUser.username}
            </font>
          </h2>
          <br/>
          <br/>
        </div>
      );
    }
  },

  render: function() {
    return (
      <div className="container-fluid">
        <div className="welcome-box-image">
          {this.welcomeBox()}
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

var React = require('react');
var History = require('react-router').History;
var ApiUtils = require('../utils/utils.js');
var UserStore = require('../stores/userStore.js');
var MapActions = require('../actions/mapActions.js');
var Neighborhood = require('../components/neighborhood.jsx');
var SearchBar = require('../components/searchBar.jsx');



var NavBar = React.createClass({
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

  _onChange: function() {
    this.setState({currentUser: UserStore.currentUser()});

  },

  signUp: function(e) {
    e.preventDefault();
    window.location.replace("/signup");
    this.history.push('/signup/');

  },

  logIn: function(e) {
    e.preventDefault();
    window.location.replace("/login");
    this.history.push('/login/');

  },

  signOut: function() {
    ApiUtils.signOutCurrentUser();
  },

  userProfile: function(e) {
    e.preventDefault();
    window.location.replace("/#/user/");
    this.history.push('/user/');
  },

  renderNavBarRight: function() {
    if(this.state.currentUser.username ===  null){
      return (
        <ul className="navbar-list nav-pills">
          <li onClick={this.logIn} className="icon-bar">
            <a href="#"><font color="#0f006f">Log In</font></a>
          </li>
          <li onClick={this.signUp} className="icon-bar">
            <a href="#"><font color="#0f006f">Sign Up</font></a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="navbar-list nav-pills">
          <li>
            <b>
              <a href="#" onClick={this.userProfile}><font color="#0f006f">
                {this.state.currentUser.username}
              </font></a>
            </b>
          </li>
          <li onClick={this.signOut} className="icon-bar">
            <a href="#"><font color="#0f006f">Sign Out</font></a>
          </li>
        </ul>
      );
    }
  },

  render: function() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">

          <div className="navbar-header">
            <a className="navbar-brand" href="/" ><font color="#0f006f">
              <div id="logo"><div id="marker">
                <p>Rec'd</p>
              </div></div>
            </font></a>
          </div>
          <ul className="navbar-list nav-pills nav-left">
            <SearchBar />
            <Neighborhood />
          </ul>

          {this.renderNavBarRight()}
        </div>
      </nav>

    );
  }

});

module.exports = NavBar;

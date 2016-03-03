var React = require('react');
var StoreIndex = require('../components/storeIndex.jsx');
var NavBar = require('../components/navBar.jsx');
var Splash = require('../components/splash.jsx');



var App = React.createClass({
  renderElements: function(){
    if (this.props.location.pathname.slice(0,6) === "/store"){
      return this.props.children;
    } else {
      return <Splash/>;
    }

  },

  render: function() {
    return (
      <div className="wrapper">
        <NavBar/>
        <div className="main-container container-fluid">
          {this.renderElements()}
        </div>
      </div>
    );
  }
});

module.exports = App;

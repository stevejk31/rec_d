var React = require('react');
var StoreIndex = require('../components/storeIndex.jsx');
var NavBar = require('../components/navBar.jsx');



var App = React.createClass({

  render: function() {
    return (
      <div className="wrapper">
        <NavBar/>
        <div className="main-container container-fluid">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = App;

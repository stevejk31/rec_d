var React = require('react');
var StoreIndex = require('../components/storeIndex.jsx');
var NavBar = require('../components/navBar.jsx');
var Footer = require('../components/footer.jsx')


var App = React.createClass({

  render: function() {
    return (
      <div className="wrapper">
        <NavBar/>
        <div className="main-container container-fluid">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
});

module.exports = App;

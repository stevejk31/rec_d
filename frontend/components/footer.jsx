var React = require('react');



var Footer = React.createClass({
  handleClick: function () {
    window.scrollTo(0, 0);

  },
  render: function() {
    return (
      <footer className="footer group">

        <small className="footer-copy">
          {"© 2016 Po'Tart All rights reserved."}
        </small>

        <ul className="footer-links group">
          <li><a onClick={this.handleClick} href="/#/stores/">Home</a></li>
          <li><a onClick={this.handleClick} href="/#/">About</a></li>
        </ul>

      </footer>
    );
  }
});

module.exports = Footer;

// useful things to add to footer later
// <li><a href="#">Terms</a></li>
// <li><a href="#">Privacy</a></li>

var React = require('react');
var FilterActions = require('../actions/filterActions.js');

var Filter = React.createClass({
  getInitialState: function() {
    return ({
      open: false
    });
  },

  openFilter: function () {
    if (this.state.open === true) {
      this.setState({open: false});
      FilterActions.openStores(false);
    } else {
      this.setState({open: true});
      FilterActions.openStores(true);
    }
  },

  render: function() {
    var open = "btn button-closed";
    if (this.state.open) {
      open = "btn button-open";
    }
    return (
      <div className="map-filters-index">
        <h4>Filters:</h4>
        <br/>
        <div>
          <button className={open} onClick={this.openFilter}><font color="#0f006f">Open Now</font></button>
        </div>
      </div>
    );
  }

});

module.exports = Filter;

var React = require('react');
var FilterActions = require('../actions/filterActions.js');

var Filter = React.createClass({
  getInitialState: function() {
    return ({
      open: false,
      wifi: false
    });
  },

  openFilter: function (e) {
    e.preventDefault();
    if (this.state.open === true) {
      this.setState({open: false});
      FilterActions.openStores(false);
    } else {
      this.setState({open: true});
      FilterActions.openStores(true);
    }
  },
  wifiFilter: function (e) {
    e.preventDefault();
    if (this.state.wifi === true) {
      this.setState({wifi: false});
      FilterActions.wifiStores(false);
    } else {
      this.setState({wifi: true});
      FilterActions.wifiStores(true);
    }
  },

  render: function() {
    var closed = "btn button-closed filter-buttons";
    var open = "btn button-open filter-buttons";
    return (
      <div className="map-filters-index">
        <h4>Filters:</h4>
        <br/>
        <button className={this.state.open ? open : closed}
          onClick={this.openFilter}>
          <font color="#0f006f">Open Now</font>
        </button>
        <button className={this.state.wifi ? open : closed}
          onClick={this.openFilter}>
          <font color="#0f006f">Wifi</font>
        </button>
      </div>
    );
  }

});

module.exports = Filter;

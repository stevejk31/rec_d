var React = require('react');
var FilterActions = require('../actions/filterActions.js');

var Filter = React.createClass({
  getInitialState: function() {
    return ({
      open: false,
      wifi: false,
      acceptCC: false,
      acceptsAndroid: false,
      acceptsApple: false,
      parking: false,
      bikeParking: false,
      outdoorSeating: false,
      hasTv: false,
      waiterService: false,
      noiseLevel: false,
      filter: false
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
  acceptCCFilter: function(e) {
    e.preventDefault();
    if (this.state.acceptCC === true) {
      this.setState({acceptCC: false});
      FilterActions.acceptCC(false);
    } else {
      this.setState({acceptCC: true});
      FilterActions.acceptCC(true);
    }
  },
  acceptsAndroid: function(e) {
    e.preventDefault();
    if (this.state.acceptsAndroid === true) {
      this.setState({acceptsAndroid: false});
      FilterActions.acceptsAndroid(false);
    } else {
      this.setState({acceptsAndroid: true});
      FilterActions.acceptsAndroid(true);
    }
  },
  acceptsApple: function(e) {
    e.preventDefault();
    if (this.state.acceptsApple === true) {
      this.setState({acceptsApple: false});
      FilterActions.acceptsApple(false);
    } else {
      this.setState({acceptsApple: true});
      FilterActions.acceptsApple(true);
    }
  },
  parking: function(e) {
    e.preventDefault();
    if (this.state.parking === true) {
      this.setState({parking: false});
      FilterActions.parking(false);
    } else {
      this.setState({parking: true});
      FilterActions.parking(true);
    }
  },
  bikeParking: function(e) {
    e.preventDefault();
    if (this.state.bikeParking === true) {
      this.setState({bikeParking: false});
      FilterActions.bikeParking(false);
    } else {
      this.setState({bikeParking: true});
      FilterActions.bikeParking(true);
    }
  },
  outdoorSeating: function(e) {
    e.preventDefault();
    if (this.state.outdoorSeating === true) {
      this.setState({outdoorSeating: false});
      FilterActions.outdoorSeating(false);
    } else {
      this.setState({outdoorSeating: true});
      FilterActions.outdoorSeating  (true);
    }
  },
  hasTv: function(e) {
    e.preventDefault();
    if (this.state.hasTv === true) {
      this.setState({hasTv: false});
      FilterActions.hasTv(false);
    } else {
      this.setState({hasTv: true});
      FilterActions.hasTv  (true);
    }
  },
  hasTv: function(e) {
    e.preventDefault();
    if (this.state.hasTv === true) {
      this.setState({hasTv: false});
      FilterActions.hasTv(false);
    } else {
      this.setState({hasTv: true});
      FilterActions.hasTv  (true);
    }
  },
  waiterService: function(e) {
    e.preventDefault();
    if (this.state.waiterService === true) {
      this.setState({waiterService: false});
      FilterActions.waiterService(false);
    } else {
      this.setState({waiterService: true});
      FilterActions.waiterService  (true);
    }
  },
  noiseLevel: function(e) {
    e.preventDefault();
    if (this.state.noiseLevel === false) {
      this.setState({noiseLevel: "Quiet"});
      FilterActions.noiseLevel("Quiet");
    } else if (this.state.noiseLevel === "Quiet") {
      this.setState({noiseLevel: "Medium"});
      FilterActions.noiseLevel("Medium");
    } else if (this.state.noiseLevel === "Medium") {
      this.setState({noiseLevel: "High"});
      FilterActions.noiseLevel("High");
    } else if (this.state.noiseLevel === "High"){
      this.setState({noiseLevel: false});
      FilterActions.noiseLevel  (false);
    }
  },
  setNoiseLevelClass: function () {
    if (this.state.noiseLevel === false) {
      return "btn button-closed filter-buttons"
    } else if (this.state.noiseLevel === "Quiet") {
      return "btn button-open filter-buttons"
    } else if (this.state.noiseLevel === "Medium") {
      return "btn button-open filter-buttons"
    } else if (this.state.noiseLevel === "High"){
      return "btn button-open filter-buttons"
    }
  },
  setNoiseLevelText: function (){
    if (this.state.noiseLevel === false) {
      return "Noise Level";
    } else {
      return this.state.noiseLevel;
    }
  },
  filterButton: function(e) {
    e.preventDefault();
    if (this.state.filter === true) {
      this.setState({filter: false});
    } else {
      this.setState({filter: true});
    }
  },
  renderButtons: function (argument) {
    if (!this.state.filter) {
      return "";
    } else {
      var closed = "btn button-closed filter-buttons";
      var open = "btn button-open filter-buttons";
      return (
        <span className="container-fluid">
          <button className={this.state.open ? open : closed}
            onClick={this.openFilter}>
            <font color="#0f006f">Open Now</font>
          </button>
          <button className={this.state.wifi ? open : closed}
            onClick={this.wifiFilter}>
            <font color="#0f006f">Wifi</font>
          </button>
          <button className={this.state.acceptCC ? open : closed}
            onClick={this.acceptCCFilter}>
            <font color="#0f006f">Credit Card</font>
          </button>
          <button className={this.state.acceptsAndroid ? open : closed}
            onClick={this.acceptsAndroid}>
            <font color="#0f006f">Android Pay</font>
          </button>
          <button className={this.state.acceptsApple ? open : closed}
            onClick={this.acceptsApple}>
            <font color="#0f006f">Apple Pay</font>
          </button>
          <button className={this.state.parking ? open : closed}
            onClick={this.parking}>
            <font color="#0f006f">Parking</font>
          </button>
          <button className={this.state.bikeParking ? open : closed}
            onClick={this.bikeParking}>
            <font color="#0f006f">Bike Parking</font>
          </button>
          <button className={this.state.outdoorSeating ? open : closed}
            onClick={this.outdoorSeating}>
            <font color="#0f006f">Outdoor Seats</font>
          </button>
          <button className={this.state.hasTv ? open : closed}
            onClick={this.hasTv}>
            <font color="#0f006f">Has TV</font>
          </button>
          <button className={this.state.waiterService ? open : closed}
            onClick={this.waiterService}>
            <font color="#0f006f">Waiter Service</font>
          </button>
          <button className={this.setNoiseLevelClass()}
            onClick={this.noiseLevel}>
            <font color="#0f006f">{this.setNoiseLevelText()}</font>
          </button>
        </span>
      );
    }
  },
  render: function() {
    var closed = "btn button-closed filter-buttons";
    var open = "btn button-open filter-buttons";
    return (
      <div className="map-filters-index">
        <button className={this.state.filter ? open : closed}
          onClick={this.filterButton}>
          <font color="#0f006f">Filters:</font>
        </button>
        {this.renderButtons()}

      </div>
    );
  }

});

module.exports = Filter;

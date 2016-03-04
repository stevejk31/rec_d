var React = require('react');
var NEIGHBORHOODS = require('../constants/neighborhoods.js');
var History = require('react-router').History;
var MapActions = require('../actions/mapActions.js')

var neighborhoods = Object.keys(NEIGHBORHOODS);

var Neighbordhood = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return { inputVal: "" };
  },

  handleInput: function (event) {
    this.setState({ inputVal: event.currentTarget.value });
  },

  matches: function () {
    var matches = [];
    if (this.state.inputVal.length > 0) {
      neighborhoods.forEach(function (neighorhood) {
        var sub = neighorhood.slice(0, this.state.inputVal.length);
        if(sub.toLowerCase() === this.state.inputVal.toLowerCase()){
          matches.push(neighorhood);
        }
      }.bind(this));
    }
    if(matches.length < 1 || this.state.inputVal.toLowerCase() === matches[0].toLowerCase()){
      this.locationClassName = "location-locations"
    }else {
      this.locationClassName = "location-locations locations-display"
    }
    return matches;
  },

  selectName: function (event) {
    var neighorhood = event.currentTarget.innerText;
    this.setState({ inputVal: neighorhood });
    this.handleLocation([neighorhood]);
  },
  handleLocation: function (locations) {
    if (locations[0] !== undefined) {
      MapActions.setCenter(NEIGHBORHOODS[locations[0]])
      this.history.pushState({}, '/stores/', {});
      this.setState( { inputVal: "" });

    }
  },
  handleEnter: function (e) {
    if (e.key == "Enter") {
      var locations = this.matches();
      this.handleLocation(locations)
    }
  },
  render: function () {
    var results = this.matches().map(function (result, i) {
      return (
          <li key={i} onClick={this.selectName}>{result}</li>
      );
    }.bind(this));

    return(
      <li className="input-group location-search">
        <label htmlFor="nearby"
          className="location-search-label">
        </label>
        <input
          type="text"
          className="form-control location-form"
          onKeyPress={this.handleEnter}
          onChange={this.handleInput}
          value={this.state.inputVal}
          placeholder="Enter Neighborhood..."/>
        <ul className={this.locationClassName}>
          {results}
        </ul>
        <span className="input-group-btn">
          <button onClick={this.handleLocation.bind(this,results)} className="btn btn-default" type="button">🔍</button>
        </span>
      </li>
    );
  }
});

module.exports = Neighbordhood;

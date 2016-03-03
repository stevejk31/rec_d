var React = require('react');
var History = require('react-router').History;
var MapActions = require('../actions/mapActions.js')

var SearchBar = React.createClass({

  mixins: [History],

  getInitialState: function () {
    return { inputVal: "" };
  },

  handleInput: function (event) {
    this.setState({ inputVal: event.currentTarget.value });
  },

  handleButton: function () {
    MapActions.searchStores(this.state.inputVal);
    this.history.pushState({}, '/stores/', {});
    this.setState({inputVal:""})
  },

  handleEnter: function (e) {
    if (e.key == "Enter") {
      this.handleButton();
    }
  },
  render: function () {
    return(
      <li className="input-group search-bar">
        <label htmlFor="search"
          className="location-search-label">
        </label>
        <input
          type="text"
          className="form-control location-form"
          onKeyPress={this.handleEnter}
          onChange={this.handleInput}
          value={this.state.inputVal}
          placeholder="Coffee Shop Name..."/>
        <span className="input-group-btn">
          <button onClick={this.handleButton} className="btn btn-default" type="button">🔍</button>
        </span>
      </li>
    );
  }
});

module.exports = SearchBar;

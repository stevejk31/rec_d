var React = require('react');
var StoreStore = require('../stores/storeStore.js');
var ApiUtils = require('../utils/utils.js');
var StoreIndexItem = require('../components/storeIndexItem.jsx');
var MapStore = require('../stores/mapStore.js');
var History = require('react-router').History;
var MapActions = require('../actions/mapActions.js');


var PopularPosts = React.createClass({
  mixins: [History],

  getInitialState: function() {
    return ({
      stores: StoreStore.all(),
      numStores: 5,
    });
  },

  componentDidMount: function() {
    this.mapListener = MapStore.addListener(this._onMapChange);
    this.storeListener = StoreStore.addListener(this._onStoreChange);
    MapActions.popularStores(this.state.numStores);
  },

  _onStoreChange: function() {
    this.setState({
      stores: StoreStore.all()
    });
  },

  _onMapChange: function() {
    ApiUtils.fetchStores();
  },

  componentWillUnmount: function() {
    this.storeListener.remove();
    this.mapListener.remove();
  },

  renderStores: function() {
    var _renderStores =[];
    if (Object.keys(this.state.stores)[0] == ["undefined"]) {
      _renderStores = <li>loading...</li>;
    } else if (Object.keys(this.state.stores).length === 0) {
      _renderStores = <li>No Results</li>;
    } else {
      for (var i in this.state.stores) {
        if (this.state.stores.hasOwnProperty(i)) {
          _renderStores.push(
            <StoreIndexItem key={i} store={this.state.stores[i]}/>
          );
        }
      }
    }
    return _renderStores;
  },

  render: function() {

    return (
      <div className="container-fluid">
        <ul className="stores-list nav nav-pills nav-stacked">
          {this.renderStores()}
        </ul>
      </div>
    );
  }

});

module.exports = PopularPosts;

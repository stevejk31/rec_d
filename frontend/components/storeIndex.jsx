var React = require('react');
var ApiUtils = require('../utils/utils.js');
var StoreStore = require('../stores/storeStore.js');
var StoreIndexItem = require('../components/storeIndexItem.jsx');
var Map = require('../components/map.jsx');
var MapActions = require('../actions/mapActions.js');
var MapStore = require('../stores/mapStore.js');
var FilterActions = require('../actions/filterActions.js');
var Filter = require('../components/filter.jsx');
var History = require('react-router').History;


var StoreIndex = React.createClass({
  mixins: [History],

  getInitialState: function() {
    return ({
      stores: StoreStore.all(),
      mapParams: MapStore.params(),
      clickedLoc: null,
      numStores: 10,
      loadMore: true
    });
  },

  componentDidMount: function() {
    this.storeListener = StoreStore.addListener(this._onStoreChange);
    this.mapListener = MapStore.addListener(this._onMapChange);
  },

  _onStoreChange: function() {
    this.setState({
      stores: StoreStore.all()
    });
    if (Object.keys(this.state.stores).length === 0 || (this.state.numStores - Object.keys(this.state.stores).length) > 10) {
      this.setState({loadMore: false});
    } else {
      this.setState({loadMore: true});
    }

  },

  _onMapChange: function() {
    this.setState({
      mapParams: MapStore.params()
    });
    ApiUtils.fetchStores();
  },

  componentWillUnmount: function() {
    this.storeListener.remove();
    this.mapListener.remove();
  },

  handleMarkerClick: function (store) {
    this.history.pushState(null, 'store/'+store.id);
  },

  renderStores: function() {
    var _renderStores =[];
    if (Object.keys(this.state.stores)[0] == ["undefined"]) {
      _renderStores = <li>loading...</li>;
    } else if (Object.keys(this.state.stores).length === 0) {
      _renderStores = <li>No Results</li>;
    } else {
      var idx = 0;
      for (var i in this.state.stores) {
        if (this.state.stores.hasOwnProperty(i)) {
          _renderStores.push(
            <StoreIndexItem key={i} store={this.state.stores[i]}/>
          );
        }
        idx ++;
        if (idx === this.state.numStores) {
          break;
        }
      }
    }
    return _renderStores;
  },


  addMore: function () {
    var newNumStores = this.state.numStores + 10;
    this.setState({numStores: newNumStores});
    MapActions.addMoreStores(newNumStores);
  },

  removeStoreParam: function (argument) {
    MapActions.searchStores();
  },

  removeTagParam: function (argument) {
    FilterActions.setTag();
  },

  render: function() {
    var button = "";
    if (this.state.loadMore) {
      button = (
        <button
          className="btn btn-default add-more-button"
          type="button"
          onClick={this.addMore}>
            View More
        </button>
      );
    }
    var search = [];
    if (this.state.mapParams.store) {
      search.push(
        <li key={this.state.mapParams.store}>
          The results for "{this.state.mapParams.store}"
          <button className="btn btn-default remove-param-button"
            onClick={this.removeStoreParam}>
            X
          </button>
        </li>);
    }
    if (this.state.mapParams.tag) {
      search.push(
        <li key={this.state.mapParams.tag}>
          The results for tags: "{this.state.mapParams.tag}"
          <button className="btn btn-default remove-param-button"
            onClick={this.removeTagParam}>
            X
          </button>
        </li>);
    }
    return (
      <div className="container-fluid">
        <Filter />
        <div className="map-container">
          <Map
          numStores={this.state.numStores}
          onMarkerClick={this.handleMarkerClick}
          onMarkerHover={this.handleMarkerHover}
          stores={this.state.stores}
          />
        </div>
        <div id="store-index-left">
          <ul className="stores-list nav nav-pills nav-stacked">
            {search}
            {this.renderStores()}
            <li>
              {button}
            </li>
          </ul>
        </div>
      </div>
    );
  }

});

module.exports = StoreIndex;

var React = require('react');
var StoreStore = require('../stores/storeStore.js');
var ApiUtils = require('../utils/utils.js');
var StoreIndexItem = require('../components/storeIndexItem.jsx');
var Map = require('../components/map.jsx');
var MapStore = require('../stores/mapStore.js');
var History = require('react-router').History;
var MapActions = require('../actions/mapActions.js');


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
    ApiUtils.fetchStores();
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

  renderMap: function(){
    var map = "";
    if (Object.keys(this.state.stores)[0] != ["undefined"]) {
      map = (
        <div className="map-container">
          <Map
          numStores={this.state.numStores}
          onMarkerClick={this.handleMarkerClick}
          onMarkerHover={this.handleMarkerHover}
          stores={this.state.stores}
          />
        </div>
      );
    }
    return map;
  },

  addMore: function () {
    var newNumStores = this.state.numStores + 10;
    this.setState({numStores: newNumStores});
    MapActions.addMoreStores(newNumStores);
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
    var search = "";
    if (this.state.mapParams.store) {
      search = <li>The results for "{this.state.mapParams.store}"</li>;
    }
    return (
      <div className="container-fluid">
          {this.renderMap()}
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

var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher.js');

var _params = {numStores: 10 };
var MapStore = new Store(AppDispatcher);
MapStore.params = function () {
  return Object.assign({}, _params);
};

MapStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "UPDATE_BOUNDS":
      _params.bounds = payload.bounds;
      MapStore.__emitChange();
      break;
    case "NEIGHBORHOOD_UPDATE":
      _params.neighborhood = payload.neighborhood;
      MapStore.__emitChange();
      break;
    case "SEARCH_TAG":
      _params.tag = payload.tag;
      MapStore.__emitChange();
      break;
    case "SET_CENTER":
      _params.center = payload.center;
      MapStore.__emitChange();
      break;
    case "STORE_SEARCH":
      _params.store = payload.store;
      MapStore.__emitChange();
      break;
    case "ADD_MORE_STORES":
      _params.numStores = payload.numStores;
      MapStore.__emitChange();
      break;
    case "POPULAR_STORES":
      resetParams(payload.numStores);
      MapStore.__emitChange();
      break;
    case "OPEN_STORES":
      _params.open = payload.open;
      MapStore.__emitChange();
      break;
    case "WIFI_AVAIL":
      _params.wifi = payload.wifi;
      MapStore.__emitChange();
      break;
    case "ACCEPT_CC":
      _params.creditCard = payload.creditCard;
      MapStore.__emitChange();
      break;
    case "ACCEPT_AND":
      _params.acceptsAndroid = payload.acceptsAndroid;
      MapStore.__emitChange();
      break;
    case "ACCEPT_APP":
      _params.acceptsApple = payload.acceptsApple;
      MapStore.__emitChange();
      break;
    case "PARKING":
      _params.parking = payload.parking;
      MapStore.__emitChange();
      break;
    case "BIKE_PARKING":
      _params.bikeParking = payload.bikeParking;
      MapStore.__emitChange();
      break;
    case "OUTDOOR_SEATING":
      _params.outdoorSeating = payload.outdoorSeating;
      MapStore.__emitChange();
      break;
    case "HAS_TV":
      _params.hasTv = payload.hasTv;
      MapStore.__emitChange();
      break;
    case "WAITER_SERVICE":
      _params.waiterService = payload.waiterService;
      MapStore.__emitChange();
      break;
    case "NOISE_LEVEL":
      _params.noiseLevel = payload.noiseLevel;
      MapStore.__emitChange();
      break;
  }
};
var resetParams = function(numStores) {
  _params = {};
  _params.numStores = numStores;
};

MapStore.getCenter = function() {
  var center = Object.assign({}, _params.center);
  delete _params.center;
  return center;
};


module.exports = MapStore;

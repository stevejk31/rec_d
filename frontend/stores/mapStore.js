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
      _params.neighborhood = payload.neighborhood
      MapStore.__emitChange();
      break;
    case "SEARCH_TAG":
      _params.tag = payload.tag
      MapStore.__emitChange();
      break;
    case "SET_CENTER":
      _params.center = payload.center
      MapStore.__emitChange();
      break;
    case "STORE_SEARCH":
      _params.store = payload.store
      MapStore.__emitChange();
      break;
    case "ADD_MORE_STORES":
      _params.numStores = payload.numStores
      MapStore.__emitChange();
      break;
    case "POPULAR_STORES":
      _params.numStores = payload.numStores
      MapStore.__emitChange();
      break;
  }
};

MapStore.getCenter = function() {
  var center = Object.assign({}, _params.center)
  delete _params.center
  return center;
}


module.exports = MapStore;

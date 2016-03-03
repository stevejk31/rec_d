var AppDispatcher = require('../dispatcher');

var MapActions = {
  updateBounds: function (bounds) {
    AppDispatcher.dispatch({
      actionType: "UPDATE_BOUNDS",
      bounds: bounds
    });
  },
  setCenter: function(center){
    AppDispatcher.dispatch({
      actionType: "SET_CENTER",
      center: center
    });
  },
  searchStores: function(store) {
    AppDispatcher.dispatch({
      actionType: "STORE_SEARCH",
      store: store
    });
  },
  addMoreStores: function(numStores) {
    AppDispatcher.dispatch({
      actionType: "ADD_MORE_STORES",
      numStores: numStores
    });
  },
  popularStores: function(numStores) {
    AppDispatcher.dispatch({
      actionType: "POPULAR_STORES",
      numStores: numStores
    });
  }
};

module.exports = MapActions

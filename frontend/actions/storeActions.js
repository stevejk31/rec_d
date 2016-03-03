var AppDispatcher = require('../dispatcher.js');

var StoreActions = {
  receiveAllStores: function(stores){
    AppDispatcher.dispatch({
      actionType: "STORES_RECEIVED",
      stores: stores
    });
  },

  receiveStore: function(store){
    AppDispatcher.dispatch({
      actionType: "STORE_RECEIVED",
      store: store
    });
  }

};
module.exports = StoreActions;

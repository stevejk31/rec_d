var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher.js');

var _stores = {undefined};
var _store = {};
var StoreStore = new Store(AppDispatcher);

StoreStore.all = function () {
  return Object.assign({}, _stores);
};

StoreStore.find_by_id = function(id) {
  var temp_store = _store;
  if (temp_store.id === id ) {
    return {};
  } else {
    return temp_store;
  }
}

StoreStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "STORES_RECEIVED":
      resetStores(payload.stores);
      StoreStore.__emitChange();
      break;
    case "STORE_RECEIVED":
      singleStore(payload.store);
      StoreStore.__emitChange();
      break;
  }
};


var singleStore = function(store){
  _store = store;
};

var resetStores = function(stores){
  _stores = {};
  for (var i = 0; i < stores.length; i++) {
    var store = stores[i];
    _stores[store.id] = store;

  }
};


module.exports = StoreStore;

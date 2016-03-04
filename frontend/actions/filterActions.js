var AppDispatcher = require('../dispatcher');

var FilterActions = {
  updateNeightborHood: function (value){
    AppDispatcher.dispatch({
      actionType: "NEIGHBORHOOD_UPDATE",
      neighborhood: value,
    });
  },
  setTag: function (tag){
    AppDispatcher.dispatch({
      actionType: "SEARCH_TAG",
      tag: tag,
    });
  },
  openStores: function (bool){
    AppDispatcher.dispatch({
      actionType: "OPEN_STORES",
      open: bool,
    });
  }

};

module.exports = FilterActions;

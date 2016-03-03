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
  }
};

module.exports = FilterActions;

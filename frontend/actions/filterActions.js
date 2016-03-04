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
  },
  wifiStores: function (bool){
    AppDispatcher.dispatch({
      actionType: "WIFI_AVAIL",
      wifi: bool,
    });
  },
  acceptCC: function (bool){
    AppDispatcher.dispatch({
      actionType: "ACCEPT_CC",
      creditCard: bool,
    });
  },
  acceptsAndroid: function (bool){
    AppDispatcher.dispatch({
      actionType: "ACCEPT_AND",
      acceptsAndroid: bool,
    });
  },
  acceptsApple: function (bool){
    AppDispatcher.dispatch({
      actionType: "ACCEPT_APP",
      acceptsApple: bool,
    });
  },
  parking: function (bool){
    AppDispatcher.dispatch({
      actionType: "PARKING",
      parking: bool,
    });
  },
  bikeParking: function (bool){
    AppDispatcher.dispatch({
      actionType: "BIKE_PARKING",
      bikeParking: bool,
    });
  },
  outdoorSeating: function (bool){
    AppDispatcher.dispatch({
      actionType: "OUTDOOR_SEATING",
      outdoorSeating: bool,
    });
  },
  hasTv: function (bool){
    AppDispatcher.dispatch({
      actionType: "HAS_TV",
      hasTv: bool,
    });
  },
  waiterService: function (bool){
    AppDispatcher.dispatch({
      actionType: "WAITER_SERVICE",
      waiterService: bool,
    });
  },
  noiseLevel: function (level){
    AppDispatcher.dispatch({
      actionType: "NOISE_LEVEL",
      noiseLevel: level,
    });
  }

};

module.exports = FilterActions;

var React = require('react');
var ApiUtils = require('../utils/utils.js');
var MapStore = require('../stores/mapStore.js');
var MapActions = require('../actions/mapActions.js');
var StoreStore = require('../stores/storeStore.js');

function _getCoordsObj(latLng) {
  return {
    lat: latLng.lat(),
    lng: latLng.lng()
  };
}

var Map = React.createClass({
  componentDidMount: function(){
    var mapDOMNode = this.refs.map;

    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.markers = [];
    this.registerListeners();
    var idx = 0;
    idx = 0;

    // center map iof there is only 1 store
    if (this.props.stores[Object.keys(this.props.stores)[0]] !== undefined &&
        Object.keys(this.props.stores).length === 1) {
      var avgLat = this.props.stores[0].basicInfo.lat;
      var avgLon = this.props.stores[0].basicInfo.lon;
      this.map.setCenter({lat: avgLat, lng: avgLon});
      this.map.setZoom(16);
    }

  },

  componentWillReceiveProps: function (oldProps) {
    this._onChange();
  },

  _onChange: function() {
    var stores = this.props.stores;
    this.removeMarker();
    var idx = 0;
    idx = 0;
    for (var key in this.props.stores) {
      if (this.props.stores.hasOwnProperty(key) && key !== "undefined") {

        this.createMarkerFromStore(this.props.stores[key]);
      }
    }
    var center = MapStore.getCenter();
    if (center.lat != undefined && center.lng != undefined) {
      this.map.setCenter({lat: center.lat, lng: center.lng});
      this.map.setZoom(15);
    }
  },

  componenetWillUnmount: function(){
    this.mapStoreListener.remove();
    this.storeListener.remove();
  },

  registerListeners: function(){
    var that = this;
    google.maps.event.addListener(this.map, 'idle', function() {
      var bounds = that.map.getBounds();
      var zoom = that.map.getZoom();
      var northEast = _getCoordsObj(bounds.getNorthEast());
      var southWest = _getCoordsObj(bounds.getSouthWest());
      var bounds = {
        northEast: northEast,
        southWest: southWest,
        zoom: zoom
      };
      MapActions.updateBounds(bounds);
    });
    this.mapStoreListener = MapStore.addListener(this._onChange);
    this.storeListener = StoreStore.addListener(this._onChange);
  },

  createMarkerFromStore: function (store) {
    var that = this;
    var pos = new google.maps.LatLng(store.basicInfo.lat, store.basicInfo.lon);
    var marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      storeId: store.id
    });
    marker.setIcon("https://maps.google.com/mapfiles/ms/icons/coffeehouse.png");
    marker.addListener('click', function () {
      that.props.onMarkerClick(store);
    });
    marker.addListener('mouseover', function () {
      that.handleMarkerHover(store, marker);
    });


    this.markers.push(marker);
  },

  handleMarkerHover: function (store, marker) {
    var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h4 id="firstHeading" className="firstHeading">'+store.basicInfo.name+'</h4>'+
    '<div className="street">Street:  '+ store.basicInfo.street + '</div>' +
    '<div className="neighborhood">Neighborhood:  ' + store.basicInfo.neighborhood + '</div>' +
    '<div className="city">City:  ' + store.basicInfo.city + '</div>' +
    '<div className="phone">Phone:  ' + store.basicInfo.phone + '</div>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    infowindow.open(this.map, marker);
    marker.addListener('mouseout', function () {
      infowindow.close(this.map, marker);
    });
  },

  removeMarker: function(){
    for(var i = 0; i < this.markers.length; i++){
      this.markers[i].setMap(null);
    }
  },

  render: function() {
    return (
        <div id="map" ref="map">
          Map
        </div>
    );
  }

});

module.exports = Map;

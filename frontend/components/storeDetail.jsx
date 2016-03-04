var React = require('react');
var Map = require('../components/map.jsx');
var StoreStore = require('../stores/storeStore.js');
var ApiUtils = require('../utils/utils.js');
var StoreBasicInfo = require('../components/storeBasicInfo.jsx');
var StoreBusinessInfo = require('../components/storeBusinessInfo.jsx');
var StoreHours = require('../components/storeHours.jsx');
var ReviewIndex = require('../components/reviewIndex.jsx');
var Map = require('../components/map.jsx');
var UserStore = require('../stores/userStore.js');
var ReviewStore = require('../stores/reviewStore.js');


var StoreDetail = React.createClass({
  getInitialState: function() {
    return ({
      user: UserStore.currentUser(),
      store: StoreStore.find_by_id(this.props.params.store_id)
    });
  },

  componentDidMount: function() {
    ApiUtils.fetchStore(this.props.params.store_id);
    ApiUtils.fetchReviews(this.props.params.store_id);
    this.reviewListener = ReviewStore.addListener(this._onChange);
    this.storeListener = StoreStore.addListener(this._onChange);
    this.userStoreListener = UserStore.addListener(this._onUserChange);
  },

  componentWillUnmount: function() {
    this.setState({store: {}})
    this.storeListener.remove();
    this.userStoreListener.remove();
    this.reviewListener.remove();
  },

  _onUserChange: function() {
    this.setState({
      currentUser: UserStore.currentUser()
    });
  },

  _onChange: function() {
    this.setState({
      store: StoreStore.find_by_id(this.props.params.store_id)
    });
  },

  handleMarkerClick: function (bench) {
    this.props.history.pushState(null, "stores/" + store.id);
  },

  render: function() {
    if (this.state.store.basicInfo === undefined) {
      return(
        <div className="store-detail">
          loading...
        </div>
        );
    } else {
      return (
        <div className="store-detail">
          <div className="map2-container">
            <Map
              onMarkerClick={this.handleMarkerClick}
              stores={[this.state.store]}
            />
          </div>
          <ul className="nav nav-pills">
            <li role="presentation">
              <StoreBasicInfo basicInfo={this.state.store.basicInfo}/>
            </li>
            <li role="presentation">
            <StoreHours hours={this.state.store.hours}/>
            </li>
          </ul>
          <div className="container-fluid">
            <StoreBusinessInfo businessInfo={this.state.store.businessInfo}/>
            <ReviewIndex storeId={this.state.store.id}/>
          </div>
        </div>
      );
    }
  }
});

module.exports = StoreDetail;

var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var App = require('./components/app.jsx');
var StoreDetail = require('./components/storeDetail.jsx')
var StoreIndex = require('./components/storeIndex.jsx');



var routes = (
  <Route path="/" component={App}>
    <Route path="store/:store_id" component={StoreDetail}>
    </Route>
    <Route path="stores/" component={StoreIndex}>
    </Route>
  </Route>
);

document.addEventListener("DOMContentLoaded", function() {
  if(document.getElementById("root")) {
    ReactDOM.render(<Router>{routes}</Router>, root);
  }
});

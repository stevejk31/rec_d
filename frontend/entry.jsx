var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var App = require('./components/app.jsx');
var StoreDetail = require('./components/storeDetail.jsx');
var StoreIndex = require('./components/storeIndex.jsx');
var Splash = require('./components/splash.jsx');
var About = require('./components/about.jsx');
var UserPage = require('./components/userPage.jsx');



var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Splash}/>
    <Route path="about/" component={About}>
    </Route>
    <Route path="user/" component={UserPage}>
    </Route>
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

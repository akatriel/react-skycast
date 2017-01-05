var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../containers/Main');
var Home = require('../components/Home');
var Nav = require('../components/Nav');
var ForecastContainer = require('../containers/ForecastContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='forcast/:city' component={ForecastContainer} />
    </Route>
  </Router>
);

module.exports = routes;
var React = require('react');
var ForecastDetail = require('../components/ForecastDetail');

var DetailContainer = React.createClass({
  render: function() {
    return (
      <ForecastDetail
        weather={window.weather}
        city={this.props.routeParams.city} 
      />
    );
  }
});

module.exports = DetailContainer;
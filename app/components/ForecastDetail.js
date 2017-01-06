var React = require('react');
var Loading = require('../components/Loading');

var ForecastDetail = React.createClass({
	getInitialState: function () {
		return {
			weather: this.props.weather,
			city: this.props.city,
			today: window.today
		}
	},
	render: function () { 
		console.log(this.state.weather)
		return (
			<div className='text-center' style={this.styles.detail}>
				<div style={this.styles.toCenter}>
					<img style={this.styles.expand} className="img-responsive" src={'app/images/weather-icons/' + weather.weather[0].icon + '.svg'} />
				</div>
				<h3>{this.state.today}</h3>
				<h3>{this.state.city}</h3>
				<ul className="list-group">
					<li className="list-group-item">{this.state.weather.weather[0].description}</li>
					<li className="list-group-item">Min. Temp: {Math.round(this.state.weather.temp.min - 273.15)} Celcius</li>
					<li className="list-group-item">Max. Temp: {Math.round(this.state.weather.temp.max - 273.15)} Celcius</li>
					<li className="list-group-item">Humidity: {this.state.weather.humidity + '%'}</li>
				</ul>
			</div>
		)
	},
	styles: {
		detail: {

			height: '100%',
			width: '30%',
			margin: 'auto',
			marginTop: '2%',
			border: '4px solid #83a5b3',
			borderRadius: '10px',
			padding: '20px'
		},
		toCenter: {
			width: '200px',
			height: '200px',
			margin: 'auto'
		},
		expand: {
			height: '100%'
		}
	}
});

module.exports = ForecastDetail;
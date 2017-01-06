var React = require('react');
var Loading = require('../components/Loading');
var Forecast = require('../components/Forecast');

var weatherHelper = require('../utils/weatherHelper');


var ForecastContainer = React.createClass({
	addDays: function (date, days) {
	    var result = new Date(date);
	    result.setDate(result.getDate() + days);
	    return result;
	},
	getInitialState: function () {
		return {
			isLoading: true,
			city: '',
			days: [],
			currentDate: new Date()
		}
	},
	componentDidMount: function () {
		weatherHelper.getFiveDayForecast(this.props.params.city)
		.then(function(response){
			this.setState({
				isLoading: false,
				city: response.city.name,
				days: response.list
			});
		}.bind(this))
		
	},
	render: function () {
		if (this.state.isLoading) {
			return <Loading />
		}
		else {
			return (
				<div className="text-center">
					<h1>{this.state.city}</h1>
					<hr />
					<div style={this.styles.forecastContainer}>
						<Forecast router={this.props.router} city={this.state.city} info={this.state.days[0]} today={this.state.currentDate} />
						<Forecast router={this.props.router} city={this.state.city} info={this.state.days[1]} today={this.addDays(this.state.currentDate, 1)} />
						<Forecast router={this.props.router} city={this.state.city} info={this.state.days[2]} today={this.addDays(this.state.currentDate, 2)} />
						<Forecast router={this.props.router} city={this.state.city} info={this.state.days[3]} today={this.addDays(this.state.currentDate, 3)} />
						<Forecast router={this.props.router} city={this.state.city} info={this.state.days[4]} today={this.addDays(this.state.currentDate, 4)} />
					</div>
				</div>
			)
		}
	},
	styles: {
		'forecastContainer' : {
			marginLeft: 'auto',
			marginRight: 'auto'
		}
	}
});

module.exports = ForecastContainer;
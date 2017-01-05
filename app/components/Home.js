var React = require('react');
var Main = require('../containers/Main');
var styles = require('../styles/home');
var Nav = require('../components/Nav');
var weatherHelper = require('../utils/weatherHelper');

var Home = React.createClass({
	getInitialState: function () {
		return {
			query: ''
		}
	},
	updateQuery: function (e) {
		this.setState({
			query: e.target.value
		});
	},
	search: function (e) {
		e.preventDefault();
		console.log(weatherHelper.getCurrentWeather(this.state.query))
		this.props.router.push('/forecast/' + this.state.query);
	},
	render: function () {
			return (
			<Main>
				<Nav />
				<div style={styles.homebg}>
					<div className="container text-center" style={styles.homeContainer}>
						<h1>Enter a City and State</h1>
						<form className="col-sm-4 col-sm-offset-4" onSubmit={this.search}>
							<div className="form-group">
								<input className="form-control" type="text" placeholder="New York, NY" onChange={this.updateQuery} />
							</div>
							<div className="form-group">
								<button className="btn btn-block btn-success">
									 Forecast
								</button>
							</div>
						</form>
					</div>
				</div>
			</Main>
		)
	}
});


module.exports = Home;
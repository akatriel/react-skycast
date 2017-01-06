var React = require('react');
var Link = require('react-router').Link;

var Forecast = React.createClass({
	getInitialState: function () {
		var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
		var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

		var date = this.props.today;
		var dow = days[ date.getDay() ];
		var month = months[ date.getMonth() ];

		return {
			hover: false,
			info: this.props.info,
			icon: this.props.info.weather[0].icon,
			today: dow + ', ' + month + ' ' + date.getDate()
		}
	},
	toggleHover: function(){
		this.setState({hover: !this.state.hover})
	},
	clicked: function () {
		this.props.router.push({
			pathname: '/detail/' + this.props.city,
		});
		window.weather = this.state.info;
		window.today = this.state.today;
	},
	render: function () {
		var forecast = {
			height: '200px',
			width: '200px',
			display: 'inline-block',
			margin: '2%',
			border: '4px solid #83a5b3',
			borderRadius: '10px',
			padding: '20px'
		};
		var linkStyle;
	    if (this.state.hover) {
	      linkStyle = {filter: 'invert(.8)'}
	    } else {
	      linkStyle = {filter: 'invert(0)'}
	    }
		return (
			<div style={this.styles.blockify}>
				<Link to={'/detail/' + this.props.city}>
					<div style={Object.assign({},forecast,linkStyle)} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={this.clicked}>
						<img className="img-responsive" style={this.styles.image} src={'app/images/weather-icons/' + this.state.icon + '.svg'}/>
						<p>{this.state.today}</p>
					</div>
				</Link>
			</div>
		)
	},
	styles: {
		image: {
			height: '100%',
			width: '100%'
		},
		blockify: {
			display: 'inline-block',
			margin: '2%'
		}
	}
});

module.exports = Forecast;
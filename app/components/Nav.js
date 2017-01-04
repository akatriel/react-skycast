var React = require('react');
var styles = require('../styles/nav');

function Nav (props) {
	return (
		<nav className="navbar navbar-default" style={styles.nav}>
			<div className="container-fluid">
				<div className="navbar-header">
					<p className="navbar-brand" style={styles.brandy}>
						React Weather
					</p>
				</div>
				<form className="navbar-form navbar-right" role="search">
					<div className="form-group">
						<input type="text" className="form-control" placeholder="New York, NY" />
					</div>
					<button type="submit" className="btn btn-success">Forecast</button>
				</form>
			</div>
		</nav>
	)
}

module.exports = Nav;
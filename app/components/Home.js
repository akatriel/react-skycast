var React = require('react');
var Main = require('../containers/Main');
var styles = require('../styles/home');

function Home () {
	return (
		<Main>
			<div style={styles.homebg}>
				<div className="container text-center" style={styles.homeContainer}>
					<h1>Enter a City and State</h1>
					<form className="col-sm-4 col-sm-offset-4">
						<div className="form-group">
							<input className="form-control" type="text" placeholder="New York, NY"/>
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

module.exports = Home;
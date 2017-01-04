var React = require('react');
var Nav = require('../components/Nav');

function Main (props) {
	return (
		<div>
			<Nav />
			{props.children}
		</div>
	)
}

module.exports = Main;
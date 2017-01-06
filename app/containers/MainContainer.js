var React = require('react');
var Nav = require('../components/Nav');

function MainContainer (props) {
	return (
		<div>
			<Nav />
			{props.children}
		</div>
	)
}

module.exports = MainContainer;
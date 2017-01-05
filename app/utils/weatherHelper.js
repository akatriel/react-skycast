var axios = require('axios');

var weatherHelper = {
	getCurrentWeather: function (location) {
		return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + location + '&type=accurate&APPID=1c8564a334c1cb414ac8d36f1d069c80')
		.then(function(response){
			return response.data
		});
	},

	getFiveDayForecast: function (location) {
		return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + location + '&type=accurate&APPID=1c8564a334c1cb414ac8d36f1d069c80&cnt=5')
		.then(function(response) {
			return response.data
		});
	}
};


module.exports = weatherHelper;
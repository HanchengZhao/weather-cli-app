const request = require("request");

var getWeather = (lat, long, callback) => {
    request({
        url: `https://api.darksky.net/forecast/caee8f904e36404e3420c84375b2ce31/${lat},${long}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback("Unable to connect to darksky servers.");
        } else if (response.statusCode === 400) {
            callback("Unable to fetch weather.");
        } else if (response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    });
};

module.exports.getWeather = getWeather;
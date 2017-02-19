var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            location: 'Mairipora',
            temp: 27
        }
    },
    handleSearch: function (location) {
        // this.setState({
        //     location: location,
        //     temp: 23
        // });
        var that = this;
        openWeatherMap.getTemp(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp
            });
        }, function (errorMessage) {
            alert(errorMessage)
        });
    },
    render: function () {
        var {location, temp} = this.state;
        return (
            <div>
                <h2>Weather component</h2>
                <WeatherForm
                    onSearch={this.handleSearch}/>
                <WeatherMessage
                    location={location}
                    temp={temp}/>
            </div>
        )
    }
});

module.exports = Weather;

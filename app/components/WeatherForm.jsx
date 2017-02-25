var React = require('react');

var WeatherForm = React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();

        var location = this.refs.location.value;
        if (location.length > 0) {
            this.refs.location.value = ''
            this.props.onSearch(location);
        }
    },
    render: function () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="search" className="expanded" ref="location" placeholder="Enter the city name"/>
                <button className="button hollow expanded" type="submit">Get weather</button>
            </form>
        )
    }
});

module.exports = WeatherForm;

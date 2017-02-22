var React = require('react');

var About = ({props}) => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p>This is an application developed during the React course on Udemy.</p>
            <p>Hi, I'm Erico! I'm a Computer Engineer working at a startup company in Sao Paulo, Brazil.</p>
            <p>Please, feel free to take a look at:</p>
            <div className="row">
                <div className="column medium-4 large-2">
                    <a href="http://augustoerico.github.io">Blog</a>
                </div>
                <div className="column medium-4 large-2">
                    <a href="http://github.com/augustoerico">GitHub</a>
                </div>
            </div>
        </div>
  );
}

module.exports = About;

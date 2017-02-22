var React = require('react');
var {Link} = require('react-router');


var Examples = (props) => {
  return (
      <div>
        <h1 className="text-center">Examples</h1>
        <p>Here are a few examples locations to try out:</p>
        <ul>
            <li>
                <Link to='/?location=mairipora'>Mairipora, SP</Link>
            </li>
            <li>
                <Link to='/?location=sao+paulo'>Sao Paulo, SP</Link>
            </li>
        </ul>
      </div>
  )
};

module.exports = Examples;

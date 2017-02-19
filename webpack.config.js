var path = require('path');

module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    // root: __dirname,
    alias: {
        Main: path.resolve(__dirname, './app/components/Main.jsx'),
        Nav: path.resolve(__dirname, './app/components/Nav.jsx'),
        Weather: path.resolve(__dirname, './app/components/Weather.jsx'),
        WeatherForm: path.resolve(__dirname, './app/components/WeatherForm.jsx'),
        WeatherMessage: path.resolve(__dirname, './app/components/WeatherMessage.jsx'),
        About: path.resolve(__dirname, './app/components/About.jsx'),
        Examples: path.resolve(__dirname, './app/components/Examples.jsx'),
        openWeatherMap: path.resolve(__dirname, './app/components/api/openWeatherMap.jsx')
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};

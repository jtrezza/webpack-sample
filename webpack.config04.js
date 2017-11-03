const resolve = require('path').resolve;

const config = {
  context: resolve('src'),
  entry: {
    'my-bundle': './app.js',
    browser: './app-browser.js',
  },
  output: {
    path: resolve('dist'), //Not required
    filename: '[name].js' //Required
  },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: "handlebars-loader"
      }
    ]
  }
};

module.exports = config;

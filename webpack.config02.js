const path = require('path');

const config = {
  entry: './src/app.js',
  output: {
    path: resolve('dist'), //Not required
    filename: 'my-bundle.js' //Required
  }
};

module.exports = config;

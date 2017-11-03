const path = require('path');

const config = {
  context: path.resolve('src'),
  entry: './app.js',
  output: path.resolve('dist'),
  filename: 'my-bundle.js'
};

module.exports = config;

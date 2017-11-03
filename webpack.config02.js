const path = require('path');

const config = {
  entry: './src/app.js',
  output: path.resolve(__dirname, 'dist'),
  filename: 'my-bundle.js'
};

module.exports = config;

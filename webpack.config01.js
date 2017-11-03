const path = require('path');

const config = {
  output: {
    path: resolve('dist'), //Not required
    filename: 'my-bundle.js' //Required
  }
};

module.exports = config;

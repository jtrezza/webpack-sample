const resolve = require('path').resolve;

//The bundle generated is going to fail because it lacks babel to transform
//ES6 modules

const config = {
  context: resolve('src'),
  entry: './app.js',
  output: {
    path: resolve('dist'), //Not required
    filename: 'my-bundle.js' //Required
  }
};

module.exports = config;

var path = require('path');

const server = {
  entry: './app.js',
  output: {
    path: path.join(__dirname, 'build'),
    libraryTarget: 'commonjs',
    filename: 'server.js',

  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: [/(node_modules)/],
      loader: 'babel-loader',
    }]
  },
  target: 'node',
};

module.exports = server
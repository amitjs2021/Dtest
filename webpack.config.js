var path = require('path');

const server = {
  entry: [
    path.join(__dirname, 'app.js'),
  ],
  output: {
    path: path.join(__dirname, 'build'),
    libraryTarget: 'commonjs2',
    filename: 'server.js',
    publicPath: '/',
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

const client = Object.assign({}, server, {
  entry: './app/mount.js',
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'build'),
  },
  target: 'web',
})

module.exports = [ server, client ];
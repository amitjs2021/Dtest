var path = require('path');


const client = {
  entry: './components/mount.js',
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'build'),
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: [/(node_modules)/],
      loader: 'babel-loader',
    }]
  },
  target: 'web',
}

module.exports = client
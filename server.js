'use strict';
/** webpack boiler plate code - referece from net */
const PORT = process.env.PORT || 8000;
var webpack = require('webpack');
var load = require('webpack-to-memory');

var config = require('./webpack.config')[0];
var clientConfig = require('./webpack.config')[1];


var compiler = load(webpack(config));
var webpackMiddleware = require('webpack-dev-middleware');
compiler.then(files => {
  const app = files['server.js'].default;

  app.use(webpackMiddleware(webpack(clientConfig), { stats: false }));
  app.listen(PORT, function () {
    console.log(`server listening on http://localhost:${PORT}`);
  });
})

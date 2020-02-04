const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
  devtool: 'cheap-module-source-map',
  output: {
    pathinfo: true,
    publicPath: '/',
    filename: '[name].js'
  }
});

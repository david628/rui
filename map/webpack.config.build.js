const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
  //devtool: 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, 'webapp'),
    filename: 'static/js/[name].[chunkhash].js'
  },
  plugins: [
    new CleanWebpackPlugin(['webapp/static'])
  ]
});
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Is the current build a development build
const IS_DEV = (process.env.NODE_ENV === 'dev');
const port = 8080;
const dirNode = 'node_modules';
const dirApp = path.join(__dirname, './src');
const dirAssets = path.join(__dirname, './src/assets');

const appHtmlTitle = 'Data View';
/**
 * Webpack Configuration
 */
module.exports = {
  entry: {
    vendor: ['lodash'],
    baidu: path.join(dirApp, 'baidu'),
    td: path.join(dirApp, 'td')
  },
  resolve: {
    modules: [
      dirNode,
      dirApp,
      dirAssets
    ]
  },
  devServer: {
    compress: true,
      port: port,
      hot: false,
    proxy: {
      "/lib/": {
        target: `http://localhost:${ port }/webapp`,
        secure: false
      },
      "/i18n/": {
        target: `http://localhost:${ port }/webapp`,
        secure: false
      },
      "/images/": {
        target: `http://localhost:${ port }/webapp`,
        secure: false
      },
      /*"/": {
        target: "http://183.129.170.220:8088",
        pathRewrite: {'^/dlv/': ''},
        changeOrigin: true,
        secure: false
      }*/
    }
  },
  plugins: [
    /*new webpack.ProvidePlugin({
        "$": "jquery",
        "jQuery": "jquery",
        "window.jQuery": "jquery"
    }),*/
    new webpack.DefinePlugin({
      IS_DEV: IS_DEV
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "static/css/[name].[contenthash].css",
      chunkFilename: "static/css/[id].css"
    }),
    new HtmlWebpackPlugin({
      //favicon: './src/assets/images/favicon.ico',
      template: path.join(__dirname, 'baidu.ejs'),
      title: appHtmlTitle,
      chunks: ['vendor', 'baidu'],
      filename: "baidu.html"
    }),
    new HtmlWebpackPlugin({
      //favicon: './src/assets/images/favicon.ico',
      template: path.join(__dirname, 'td.ejs'),
      title: appHtmlTitle,
      chunks: ['vendor', 'td'],
      filename: "td.html"
    })
  ],
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /(node_modules)/,
      options: {
        compact: true
      }
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: IS_DEV
          }
        }
      ]
    }, {
      test: /\.(scss|less)$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            sourceMap: IS_DEV
          }
        }/*, {
          loader: 'sass-loader',
          options: {
            sourceMap: IS_DEV,
            includePaths: [dirAssets]
          }
        }*/, {  
          loader: 'less-loader',
          options: {
            sourceMap: IS_DEV,
            includePaths: [dirAssets],
            javascriptEnabled: true
          }
        }
      ]
    }, {
      test: /\.(jpe?g|png|gif|cur)$/,
      loader: 'file-loader',
      options: {
        name: '[path][name].[ext]',
        publicPath: '../../'
      }
    }/*, {
      test: /\.txt$/,
      use: 'raw-loader'
    }*/]
  }
};

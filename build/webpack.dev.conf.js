'use strict';

const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

let plugins = [
  new webpack.DefinePlugin({}),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
  new webpack.NoEmitOnErrorsPlugin(),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'index.html',
    inject: true
  })
];

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: './src/main.js',
  output: {
    path: resolve('dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {test: /\.vue$/,use: ['vue-loader']},
      {test: /\.js$/, use: ['babel-loader']},
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
      {test: /\.(png|jpe?g|gif|svg)(\?.*)?$/, loader: 'url-loader'},
      {test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/, loader: 'url-loader'}
    ]
  },
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    historyApiFallback: true,
    compress: true,
    host: 'localhost',
    port: 8080,
    open: true,
    overlay: true,
    publicPath: '/',
    proxy: {},
    watchOptions: {
      poll: false,
    }
  },
  plugins: plugins
};


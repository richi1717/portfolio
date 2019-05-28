const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['whatwg-fetch', './client/js/index.js'],
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    host: '0.0.0.0',
    port: '8080',
    historyApiFallback: true,
    compress: true,
    hot: true,
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/',
    open: true,
    setup (app) {
      const express = require('express');
      app.use(express.static(__dirname + '/resources'));
    }
  },
  resolve: {
    modules: ['client/js', 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, 'client/js/')],
        exclude: /node_modules/,
        options: { cacheDirectory: true }
      },
      {
        test: /\.s?css$/,
        loaders: ['style-loader', 'css-loader?sourceMap?root=.', 'sass-loader']
      },
      {
        test: /\.(svg|png|jpe?g)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development'
    })
  ],
  watch: true
};

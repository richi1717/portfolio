const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['whatwg-fetch', './client/js/index.js'],
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
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
        loaders: ['style-loader', 'css-loader?sourceMap?root=.', 'sass-loader?outputStyle=compressed&sourceMap']
      },
      {
        test: /\.(svg|png|jpe?g)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production'
    })
  ],
};